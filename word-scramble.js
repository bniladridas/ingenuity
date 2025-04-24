// AI Term Scramble Game
document.addEventListener('DOMContentLoaded', function() {
    // Game elements
    const scrambledWordElement = document.getElementById('scrambled-word');
    const wordGuessInput = document.getElementById('word-guess');
    const checkButton = document.getElementById('check-button');
    const feedbackElement = document.getElementById('game-feedback');
    const hintElement = document.getElementById('game-hint');
    const newGameButton = document.getElementById('new-game-button');
    
    // AI-related terms for the game
    const aiTerms = [
        { word: 'TRANSFORMER', hint: 'Architecture behind modern language models' },
        { word: 'NEURAL', hint: 'Type of network inspired by the human brain' },
        { word: 'INFERENCE', hint: 'Process of using a trained model to make predictions' },
        { word: 'ALGORITHM', hint: 'Step-by-step procedure for solving a problem' },
        { word: 'DATASET', hint: 'Collection of data used for training' },
        { word: 'ATTENTION', hint: 'Mechanism that helps models focus on relevant parts of input' },
        { word: 'EMBEDDING', hint: 'Vector representation of words or tokens' },
        { word: 'TOKENIZER', hint: 'Converts text into smaller units for processing' },
        { word: 'SYNTHARA', hint: 'The name of this AI platform' },
        { word: 'PARAMETERS', hint: 'Values that define a model\'s behavior' }
    ];
    
    let currentWord = '';
    let currentScrambled = '';
    let currentHint = '';
    
    // Function to scramble a word
    function scrambleWord(word) {
        const letters = word.split('');
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]]; // Swap
        }
        return letters.join('');
    }
    
    // Function to select a random word and scramble it
    function newGame() {
        const randomIndex = Math.floor(Math.random() * aiTerms.length);
        currentWord = aiTerms[randomIndex].word;
        currentHint = aiTerms[randomIndex].hint;
        
        // Make sure the scrambled word is different from the original
        do {
            currentScrambled = scrambleWord(currentWord);
        } while (currentScrambled === currentWord);
        
        // Update the UI
        scrambledWordElement.textContent = currentScrambled;
        wordGuessInput.value = '';
        feedbackElement.textContent = '';
        feedbackElement.className = 'game-feedback';
        hintElement.textContent = '';
        
        // Focus on the input field
        wordGuessInput.focus();
    }
    
    // Function to check the user's guess
    function checkGuess() {
        const userGuess = wordGuessInput.value.trim().toUpperCase();
        
        if (userGuess === '') {
            feedbackElement.textContent = 'Please enter a guess!';
            return;
        }
        
        if (userGuess === currentWord) {
            feedbackElement.textContent = 'Correct! Well done!';
            feedbackElement.className = 'game-feedback correct-answer';
            setTimeout(newGame, 2000); // Start a new game after 2 seconds
        } else {
            feedbackElement.textContent = 'Not quite right. Try again!';
            feedbackElement.className = 'game-feedback wrong-answer';
            hintElement.textContent = 'Hint: ' + currentHint;
        }
    }
    
    // Event listeners
    checkButton.addEventListener('click', checkGuess);
    
    wordGuessInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkGuess();
        }
    });
    
    newGameButton.addEventListener('click', newGame);
    
    // Start the game
    newGame();
});
