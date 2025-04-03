# CLI-based Quiz

A fun and interactive command-line quiz game inspired by "Who Wants to Be a Millionaire?" but with a football twist! Test your football knowledge and aim to win the virtual $1,000,000 prize.

## Features
- Interactive gameplay using a command-line interface.
- Colorful and engaging text animations.
- Questions on football history, players, and tournaments.
- Dynamic feedback for correct and incorrect answers.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- npm (comes with Node.js)

### Steps
1. Clone this repository or download the code.
2. Navigate to the project directory:
   ```bash
   cd <your-project-directory>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
To start the quiz, run the following command:
```bash
node index.js
```

## Dependencies
The following packages are used in this project:
- [chalk](https://www.npmjs.com/package/chalk): For colorful console output.
- [inquirer](https://www.npmjs.com/package/inquirer): For interactive prompts.
- [gradient-string](https://www.npmjs.com/package/gradient-string): For gradient text effects.
- [chalk-animation](https://www.npmjs.com/package/chalk-animation): For animated text.
- [figlet](https://www.npmjs.com/package/figlet): For ASCII art text.
- [nanospinner](https://www.npmjs.com/package/nanospinner): For spinner animations.

## How to Play
1. Start the game and follow the on-screen instructions.
2. Enter your name when prompted.
3. Answer the multiple-choice football trivia questions.
4. For every correct answer, you proceed to the next question.
5. If you answer a question incorrectly, the game ends.
6. Answer all questions correctly to win the game!

## Example
```
Who wants to be a Football Millionaire?

How to play?
I am a process on your computer.
If you get any questions wrong, I'll be killed.
So get all the questions right...

What's your name? Player

Question: Who won the 2018 FIFA World Cup?
Choices:
- France
- Croatia
- Belgium
- England

Checking answer...
Nice work Player. That's a legit answer.

Congrats, Player!
You win the $1,000,000!
```

## Customization
You can modify the questions or add new ones by editing the `askQuestion` calls in `index.js`.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgments
- Inspired by "Who Wants to Be a Millionaire?"
- Developed with love for football trivia enthusiasts!

