import '@types/tone';
import {Direction, Mode} from './Interfaces';
import Tone from 'tone';
import { noteNumberToString } from './Static';


export default class Audio_Manager {
    filter: Tone.Filter;
    synth: Tone.PolySynth;
    private noteIndex: number;
    private direction: Direction;
    private mode: Mode;
    private notes: Array<number>;
    private tone: typeof Tone;

    constructor(tone: typeof Tone){
        this.tone = tone;

        const vol = new tone.Volume(-9);
        const vol_2 = new tone.Volume(-3);
        const limiter = new tone.Limiter(-3).connect(tone.Master);

        this.filter = new tone.Filter(2000, "lowpass");
        this.filter.Q.value = 6;
        this.synth = new tone.PolySynth(8, tone.Synth).chain(vol, this.filter, vol_2, limiter);

        this.synth.voices.forEach(s=>{
            s.envelope.release = 0.75;
            s.envelope.sustain = 1;
        });

        this.tone.Transport.schedule(this.triggerSynth, 0);
        this.tone.Transport.loopEnd = '4n';
        this.tone.Transport.loop = true;
        this.tone.Transport.bpm.value = 80 + (160 * 4);
        
        this.notes = [];
        this.noteIndex = 0;
        this.mode = Mode.UpDown;
        this.direction = Direction.Up;
    }

    togglePlaySynth = () => {
        this.tone.Transport.toggle(0);
    }

    setBpm = (bpm: number) => {
        this.tone.Transport.bpm.value = 80 + (bpm * 4);
    }

    triggerSynth = (time: number) => {
        if(this.notes.length > 0){
            
            switch(this.mode){
                case Mode.Up:
                    this.noteIndex++;
                    if(this.noteIndex >= this.notes.length) this.noteIndex = 0;
                    break;
                case Mode.Down:
                    this.noteIndex--;      
                    if(this.noteIndex < 0) this.noteIndex = this.notes.length-1;
                    break;
                case Mode.UpDown:
                    this.direction === Direction.Up ? this.noteIndex ++ : this.noteIndex --;
                    if(this.noteIndex >= this.notes.length-1) this.direction = Direction.Down;
                    if(this.noteIndex <= 0) this.direction = Direction.Up;
                    break;
            }
            
            let note_to_play = this.notes[this.noteIndex];

            var element = document.getElementsByClassName(note_to_play.toString())[0];
            if(element)element.classList.add("playing");

            setTimeout(() => {
                if(element)element.classList.remove("playing");
            },100);

            const note_to_play_str = noteNumberToString(note_to_play);

            if(note_to_play_str) this.synth.triggerAttackRelease(note_to_play_str, 0.01, time);
            
        }
    }

    set_cutoff = (freq: number) => {
        this.filter.frequency.value = freq;
    }

    setDecay = (value: number) => {
        const time = value / 1000;
        this.synth.voices.forEach(s=>{
            s.envelope.release = time;
        });
    }

    setMode(value: Mode){
        this.mode = value;
    }

    setNotes(value: Array<number>) {
        this.notes = value;
    }
}