const HangmanGame = () => {


    const [displayWord, setDisplayWord] = useState("");
    const [guesses, setGuesses] = useState<string[]>([]);
    const [gameOver, setGameOver] = useState(false)
    const [gameWon, setGameWon] = useState(false)
    const [isQwertyDisabled, setIsQwertyDisabled] = useState(false);