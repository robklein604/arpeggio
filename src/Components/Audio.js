import Tone from 'tone';

var reverb = new Tone.JCReverb(0.4);
var delay = new Tone.FeedbackDelay("16n", 0.5);
var panVol = new Tone.PanVol(0, -9);
var panVol2 = new Tone.PanVol(0, -3);
var limiter = new Tone.Limiter(-3).connect(Tone.Master);

let arpeggiatorMode = "up";

const Synth = new Tone.PolySynth(8, Tone.Synth).chain(panVol, delay,panVol2, reverb, limiter);

Synth.voices.forEach(s=>{
        
    s.envelope.release = 2.5;
    s.envelope.sustain = 1;
});

delay.wet.value = 0;
reverb.wet.value = 0;

let notes = [];
let note_index = 0;

const triggerSynth = (time) => {

    if(notes.length > 0){

        let noteNumber;
        switch(arpeggiatorMode){
            case "up":
                note_index++;
                noteNumber = notes[note_index % notes.length];
                break;
            case "down":
                note_index--;
                noteNumber = notes[note_index % notes.length];
                break;
            case "random":
                note_index = Math.floor(Math.random() * notes.length);
                noteNumber = notes[note_index];
                break;
            case "all":
                let note_numbers = notes.map(n=> {return note_number_to_string(n);});
                Synth.triggerAttackRelease(note_numbers, 0.01, time);
                return;
        }
        
        var element = document.getElementsByClassName(noteNumber)[0];
        element.classList.add("playing");

        setTimeout(function(){
            element.classList.remove("playing");
         },100);

        const note_number = note_number_to_string(noteNumber);
        Synth.triggerAttackRelease(note_number, 0.01, time);
        
        
    }
    
}


Tone.Transport.schedule(triggerSynth, 0);
Tone.Transport.loopEnd = '1n';
Tone.Transport.loop = true;
Tone.Transport.bpm.value = 180 * 4;

const note_number_to_string = (note) => {
    const oct = Math.floor(note/12);
    const value = note%12;
    let noteName;

    if(value == 0) noteName = "C"
    else if(value == 1) noteName = "C#"
    else if(value == 2) noteName = "D"
    else if(value == 3) noteName = "D#"
    else if(value == 4) noteName = "E"
    else if(value == 5) noteName = "F"
    else if(value == 6) noteName = "F#"
    else if(value == 7) noteName = "G"
    else if(value == 8) noteName = "G#"
    else if(value == 9) noteName = "A"
    else if(value == 10) noteName = "A#"
    else if(value == 11) noteName = "B"
    
    return noteName + oct;
}


const toggle_play_synth = () => {
    Tone.Transport.toggle();
}

const setBpm = (bpm) => {
    Tone.Transport.bpm.value = 80 + bpm * 4;
}

const setDecay = (value) => {
    const time = value / 1000;
    Synth.voices.forEach(s=>{
        s.envelope.release = time;
    });
}

const setDelay = (v) => {
    delay.wet.value = v / 100;
}

const setReverb = (v) => {
    reverb.wet.value = v / 100;
}

const setMode = (mode) => {
    arpeggiatorMode = mode;
}

const setChord = (chord) => {
    
}

const set_active_notes = (active_notes) => {
    notes = active_notes;
}


export {Synth};

export {toggle_play_synth, setBpm, setDecay, setDelay, setReverb, set_active_notes, setMode, note_number_to_string}