export default class Audio_Manager {

    constructor(Tone){
        this._Tone = Tone;

        const pan_vol = new Tone.PanVol(0, -9);
        const pan_vol_2 = new Tone.PanVol(0, -3);
        const limiter = new Tone.Limiter(-3).connect(Tone.Master);
        this.filter = new Tone.Filter(2000, "lowpass");
        this.filter.Q.value = 6;
        this.Synth = new Tone.PolySynth(8, Tone.Synth).chain(pan_vol, this.filter, pan_vol_2, limiter);

        this.Synth.voices.forEach(s=>{
            s.envelope.release = 0.75;
            s.envelope.sustain = 1;
        });

        Tone.Transport.schedule(this.trigger_synth, 0);
        Tone.Transport.loopEnd = '4n';
        Tone.Transport.loop = true;
        Tone.Transport.bpm.value = 80 + (160 * 4);
        
        this.notes = [];
        this.note_index = 0;
        this._mode = "updown";
        this._direction = "up";
    }

    toggle_play_synth = () => {
        this._Tone.Transport.toggle();
    }

    set_bpm = (bpm) => {
        this._Tone.Transport.bpm.value = 80 + (bpm * 4);
    }

    trigger_synth = (time) => {
        if(this.notes.length > 0){
            
            switch(this._mode){
                case "up":
                    this.note_index++;
                    if(this.note_index >= this.notes.length) this.note_index = 0;
                    
                    break;
                case "down":
                    this.note_index--;      
                    if(this.note_index < 0) this.note_index = this.notes.length-1;

                    break;
                case "updown":
                    this._direction == "up" ? this.note_index ++ : this.note_index --;

                    if(this.note_index >= this.notes.length-1) this._direction = "down";
                    if(this.note_index <= 0) this._direction = "up";
                    break;
            }
            
            let note_to_play = this.notes[this.note_index];

            var element = document.getElementsByClassName(note_to_play)[0];
            if(element)element.classList.add("playing");

            setTimeout(() => {
                if(element)element.classList.remove("playing");
            },100);

            const note_to_play_str = this.note_number_to_string(note_to_play);

            if(note_to_play_str) this.Synth.triggerAttackRelease(note_to_play_str, 0.01, time);
            
        }
    }

    set_cutoff = (freq) => {
        this.filter.frequency.value = freq;
    }

    set_decay = (value) => {
        const time = value / 1000;
        this.Synth.voices.forEach(s=>{
            s.envelope.release = time;
        });
    }
    
    set_mode = (mode) => {
        this._mode = mode;
    }

    set_active_notes = (active_notes) => {
        this.notes = active_notes;
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
}