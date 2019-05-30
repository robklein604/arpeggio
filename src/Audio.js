
export default class Audio_Manager {

    constructor(Tone){
        this.Tone = Tone;
        let reverb = new Tone.JCReverb(0.4);
        let delay = new Tone.FeedbackDelay("16n", 0.5);
        this.panVol = new Tone.PanVol(0, -9);
        this.panVol2 = new Tone.PanVol(0, -3);
        this.limiter = new Tone.Limiter(-3).connect(Tone.Master);

        this.mode = "up";

        this.Synth = new Tone.PolySynth(8, Tone.Synth).chain(panVol, delay,panVol2, reverb, limiter);

        this.Synth.voices.forEach(s=>{
            s.envelope.release = 2.5;
            s.envelope.sustain = 1;
        });
        
        delay.wet.value = 0;
        reverb.wet.value = 0;
        
        this.notes = [];
        this.note_index = 0;

        Tone.Transport.schedule(trigger_synth, 0);
        Tone.Transport.loopEnd = '1n';
        Tone.Transport.loop = true;
        Tone.Transport.bpm.value = 180 * 4;
    }

    
    note_number_to_string = (note) => {
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

    toggle_play_synth = () => {
        this.Tone.Transport.toggle();
    }

    set_bpm = (bpm) => {
        this.Tone.Transport.bpm.value = 80 + bpm * 4;
    }

    trigger_synth = (time) => {
        if(this.notes.length > 0){
    
            let note_number;
            switch(this.mode){
                case "up":
                    this.note_index++;
                    note_number = this.notes[note_index % notes.length];
                    break;
                case "down":
                    this.note_index--;
                    note_number = this.notes[this.note_index % this.notes.length];
                    break;
                case "random":
                    this.note_index = Math.floor(Math.random() * this.notes.length);
                    note_number = this.notes[this.note_index];
                    break;
                case "all":
                    let note_numbers = this.notes.map(n=> {return this.note_number_to_string(n);});
                    this.Synth.triggerAttackRelease(note_numbers, 0.01, time);
                    return;
            }
            
            var element = document.getElementsByClassName(note_number)[0];
            if(element)element.classList.add("playing");

            setTimeout(() => {
                if(element)element.classList.remove("playing");
            },100);

            const note_number_string = note_number_to_string(note_number);
            this.Synth.triggerAttackRelease(note_number_string, 0.01, time);
        }
    }

    set_decay = (value) => {
        const time = value / 1000;
        this.Synth.voices.forEach(s=>{
            s.envelope.release = time;
        });
    }

    set_delay = (v) => {
        this.delay.wet.value = v / 100;
    }
    
    set_reverb = (v) => {
        this.reverb.wet.value = v / 100;
    }
    
    set_mode = (mode) => {
        this.mode = mode;
    }

    set_active_notes = (active_notes) => {
        this.notes = active_notes;
    }
}