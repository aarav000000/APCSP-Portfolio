const handleClearClick = () => {
    setText("");
  };
  const handleGuessClick = () => {
    if (text.length === 6) {
      onGuess(text);
      setText('');
    } else if (text.length == 1) {
      onGuess(text);
      setText('')
    }
  
  };
