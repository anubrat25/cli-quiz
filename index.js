#!/usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";

let playerName;

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

async function welcome() {
  const rainbowTitle = chalkAnimation.rainbow(
    "Who wants to be a Football Millionaire? \n"
  );

  await sleep();
  rainbowTitle.stop();

  console.log(`
        ${chalk.bgBlue("How to play?")}
        I am a process on your computer.
        If you get any questions wrong, I'll be ${chalk.bgRed("killed")}
        So get all the questions right...
    `);
}

async function askName() {
  const answers = await inquirer.prompt({
    name: "player_name",
    type: "input",
    message: "What's your name?",
    default() {
      return "Player";
    },
  });

  playerName = answers.player_name;
}

async function askQuestion(question, correctAnswer, choices) {
  const answers = await inquirer.prompt({
    name: "quiz_question",
    type: "list",
    message: question,
    choices: choices,
  });

  return handleAnswer(answers.quiz_question == correctAnswer);

  async function handleAnswer(isCorrect) {
    const spinner = createSpinner("Checking answer...").start();
    await sleep();

    if (isCorrect) {
      spinner.success({
        text: `Nice work ${playerName}. That's a legit answer.`,
      });
    } else {
      spinner.error({
        text: `\uD83D\uDC80 Game over, you lose ${playerName}.`,
      });
      process.exit(1);
    }
  }
}

async function winner() {
  console.clear();
  const msg = `Congrats , ${playerName} !\n You win the \n $ 1 , 0 0 0 , 0 0 0`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

// Main quiz flow
await welcome();
await askName();

await askQuestion("Who won the 2018 FIFA World Cup?", "France", [
  "France",
  "Croatia",
  "Belgium",
  "England",
]);
await askQuestion("Which country has won the most FIFA World Cups?", "Brazil", [
  "Argentina",
  "Brazil",
  "Germany",
  "Italy",
]);
await askQuestion(
  "Who is the all-time top scorer in the UEFA Champions League?",
  "Cristiano Ronaldo",
  ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"]
);
await askQuestion(
  "Which player has won the most Ballon d'Or awards?",
  "Lionel Messi",
  ["Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Michel Platini"]
);
await askQuestion("In which year was the first FIFA World Cup held?", "1930", [
  "1950",
  "1960",
  "1930",
  "1940",
]);
await askQuestion(
  "Which club has won the most UEFA Champions League titles?",
  "Real Madrid",
  ["AC Milan", "Barcelona", "Bayern Munich", "Real Madrid"]
);
await askQuestion("Who is known as 'El Pibe de Oro'?", "Diego Maradona", [
  "Pel\u00E9",
  "Zinedine Zidane",
  "Ronaldinho",
  "Diego Maradona",
]);
await askQuestion(
  "Which country hosted the 2002 FIFA World Cup?",
  "South Korea and Japan",
  ["France", "South Korea and Japan", "Germany", "USA"]
);
await askQuestion(
  "What is the maximum number of players a team can have on the field during a football match?",
  "11",
  ["10", "12", "11", "9"]
);
await askQuestion("Which player is nicknamed 'The Pharaoh'?", "Mohamed Salah", [
  "Mohamed Salah",
  "Sadio Mane",
  "Riyad Mahrez",
  "Hakim Ziyech",
]);

await winner();
