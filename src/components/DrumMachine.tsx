import {useRef, useState} from 'react';
import DrumButton from 'components/DrumButton';
import classes from './Drummachine.module.scss';
import { TAudioClip } from 'data/soundbank-data';

const DrumMachine:React.FC<{soundbank: TAudioClip[], suffix?: string}> = (props) => {

const displayText = useRef<HTMLDivElement>(null);
const defaultDisplayText="Click Button or Press a Key!";
const [lastDisplayIndex, setDisplayIndex] = useState(-1);

const handleOnPlay = (index: number) => {
  if (!displayText.current) return;
  displayText.current.classList.remove(classes.animate);
  displayText.current.classList.add(classes.animate);
  displayText.current.innerText = props.soundbank[index].name;
  setDisplayIndex(index);
}

const handleOnStop = (index:number) => {
  if (!displayText.current || index!==lastDisplayIndex) return;
  displayText.current.innerText = "";
  displayText.current.classList.remove(classes.animate);
}

return <div id={`drum-machine${props.suffix}`} className={classes["drum-machine"]}>
  <div className={classes["drum-machine-inner"]}>
    <div id={`display${props.suffix}`} className={classes.display}>
      <span ref={displayText}>{defaultDisplayText}</span>
    </div>
      <div className={classes["drum-pads"]}>
      {
        props.soundbank.map( ( clip, key)  => {
          return <DrumButton
            clip={clip}
            index={key}
            key={'button'+key}
            onPlay={handleOnPlay}
            onStop={handleOnStop}
            suffix={props.suffix}
            disabled={false}
            />
        })
      }
      </div>
    </div>  
  </div>
}

export default DrumMachine;