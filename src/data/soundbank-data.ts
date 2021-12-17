export type TAudioClip = {
  keyStr: string,
  name: string,
  url: string,
  colorClass?: string
}

export type TSoundbank = {
  left: TAudioClip[]
  right: TAudioClip[]
}

const soundbankInitialState:TSoundbank = {
  left : [
    {
      keyStr : "Q",
      name: "Heater-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      colorClass : 'color1'
    },
    {
      keyStr: "W",
      name: "Heater-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      colorClass : 'color1'
    },
    {
      keyStr : "E",
      name: "Heater-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      colorClass : 'color1'
    },
    {
      keyStr: "A",
      name: "Heater-4",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      colorClass : 'color1'
    },
    {
      keyStr: "S",
      name: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
      colorClass : 'color3'
    },
    {
      keyStr: "D",
      name: "Open-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      colorClass : 'color3'
    },
    {
      keyStr: "Z",
      name: "Kick-n'-Hat",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      colorClass : 'color4'
    },
    {
      keyStr: "X",
      name: "Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      colorClass : 'color4'
    },
    {
      keyStr: "C",
      name: "Punchy-Kick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
      colorClass: "color4"
    },
  ],
  right:
  [
    {
      keyStr: "T",
      name: "Chord-1",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
      colorClass : 'color6'
    },
    {
      keyStr: "Y",
      name: "Chord-2",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
      colorClass : 'color6'
    },
    {
      keyStr: "U",
      name: "Chord-3",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
      colorClass : 'color6',
    },
    {
      keyStr: "G",
      name: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      colorClass : 'color5'
    },
    {
      keyStr: "H",
      name: "Shaker",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
      colorClass : 'color5'
    },
    {
      keyStr: "J",
      name: "Closed-HH",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
      colorClass : 'color5'
    },
    {
      keyStr: "B",
      name: "Clap",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      colorClass : 'color2'
    },
    {
      keyStr: "N",
      name: "Side-Stick",
      url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
      colorClass: "color2"
    },
    {
      keyStr: "M",
      name: "Snare",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
      colorClass: "color2"
  }    
  ]
}

export default soundbankInitialState;

/*
const getClip = (key: string) => {
  if (!Key2Clip.has(key))
    throw new Error('Clip associated to that key not found')
  const index: number = Key2Clip.get(key) ?? 0;
  return Clips[ index ];
}

export getClip;
*/