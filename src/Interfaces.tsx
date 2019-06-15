enum Direction {
    Up,
    Down
}

enum Mode {
    Up,
    Down,
    UpDown
}

enum KeyType{
    Black,
    White
}

interface Chord{
    name: string;
    notes: Array<number>;
}

export {Direction, Mode, KeyType, Chord};