import { TAudioClip } from 'data/soundbank-data';
import {useEffect, useCallback, useRef, useState} from 'react';
import classes from './DrumButton.module.scss';

type TDrumButton =  {
  index: number,
  clip: TAudioClip,
  onPlay?: (index:number) => void,
  onStop?: (index:number) => void
  disabled: boolean,
  suffix?: string,
}

const DrumButton: React.FC< TDrumButton > = (props) => {
 
  const audioElement = useRef<HTMLAudioElement>(null);
  const [mustPlay, setMustPlay] = useState<boolean>(false);

  const playClip = useCallback( () => {
    if (!audioElement.current) return;
    audioElement.current.play();
    if (props.onPlay!==undefined)
      props.onPlay(props.index);
  }, [ audioElement, props.clip.name, props ]);

  const playAudio = useCallback( () => {
    if ( audioElement.current === null) return;
    /* Key pressed again before the clip ends, so stoxp current play and restart */
    if (audioElement.current.currentTime > 0 && !audioElement.current.paused) {
      audioElement.current.pause();
      audioElement.current.currentTime = 0;
      playClip();
      return;
    }
    /* First Play */
    playClip();
  }, [audioElement, mustPlay, playClip] );

  const endAudio = useCallback( () => {
    if ( audioElement.current === null ) return;
    if (props.onStop!==undefined)
      props.onStop(props.index);
  }, [audioElement, props]);


  useEffect( () => {
    if(!audioElement.current)
      return;

    audioElement.current.onended = function() {
      /* Key is still pressed, repeat clip */
      if (audioElement.current && mustPlay) {
        audioElement.current.currentTime = 0;
        playAudio();
      } else {
        endAudio();
      }
    }
  }, [playAudio, endAudio, audioElement, mustPlay] );

  useEffect( () => {
    if (mustPlay)
      playAudio();
  }, [mustPlay])

  const handleKeyDown =  useCallback( (e:KeyboardEvent) => {
    if ( e.key.toString().toLowerCase() !== props.clip.keyStr.toLowerCase() )
      return;
    if (props.disabled)
      return;
    setMustPlay(true);
  }, [props.clip.keyStr, playAudio] );

  const handleKeyUp =  useCallback ( (e:KeyboardEvent) => {
    if (e.key.toLowerCase() !== props.clip.keyStr.toLowerCase())
      return;
    if (props.disabled)
      return;
    setMustPlay(false);
  }, [props.clip.keyStr, endAudio]);

  const handleMouseDown:React.MouseEventHandler = (e) => {
    if (props.disabled)
      return;

    setMustPlay(true);
    document.addEventListener("mouseup", function() {
      setMustPlay(false);
    }, {once : true});    
  };
  
  useEffect( () => {

    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('keydown', handleKeyDown);
    }

  }, [handleKeyUp, handleKeyDown]);
  
  /* The suffix part is needed for passing fCC tests, otherwise it check for optional pads with drum-pad class too */
  return (
    <div className={` ${classes['drum-pad']} ${props.clip.colorClass ? classes[props.clip.colorClass] : ''} ${(mustPlay ? classes['active']: '')}`}
      >
      <div 
        id={`drum-pad-${props.clip.keyStr}`}
        className={`drum-pad${props.suffix} ${classes['drum-pad-inner']}`}
        onMouseDown={handleMouseDown}>
        {props.clip.keyStr}
        <audio
        className='clip'
        id={props.clip.keyStr}
        src={props.clip.url}
        ref={audioElement}
      />      </div>
  
      <span className={classes.name}>{props.clip.name}</span>
    </div>
  )  
}

export default DrumButton;