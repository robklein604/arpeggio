const noteNumberToString = (note: number) => {
    const oct = Math.floor(note/12);
    const value = note%12;
    let noteName = "";

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

export {noteNumberToString};