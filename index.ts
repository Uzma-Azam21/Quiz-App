#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const welcomeMessage = chalk.blue.bold("Welcome to the Programming Quiz!");

const questions = [
  {
    type: "list",
    name: "question1",
    message: `${chalk.blue.bold("1.")} ${chalk.bold(
      "What does HTML stand for?"
    )}`,
    choices: [
      "Hyper Text Markup Language",
      "High Text Markup Language",
      "Hyper Tabular Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
  },

  {
    type: "list",
    name: "question2",
    message: `${chalk.blue.bold("2.")} ${chalk.bold(
      "Which programming language is primarily used for web development?"
    )}`,
    choices: ["Python", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },

  {
    type: "list",
    name: "question3",
    message: `${chalk.blue.bold("3.")} ${chalk.bold(
      "What does CSS stand for?"
    )}`,
    choices: [
      "Cascading Style Sheets",
      "Colorful Style Sheets",
      "Computer Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },

  {
    type: "list",
    name: "question4",
    message: `${chalk.blue.bold("4.")} ${chalk.bold(
      "Which of the following is a JavaScript framework?"
    )}`,
    choices: ["React", "Django", "Flask"],
    correctAnswer: "React",
  },

  {
    type: "list",
    name: "question5",
    message: `${chalk.blue.bold("5.")} ${chalk.bold(
      "Which company developed the Java programming language?"
    )}`,
    choices: ["Microsoft", "Sun Microsystems", "Apple"],
    correctAnswer: "Sun Microsystems",
  },

  {
    type: "list",
    name: "question6",
    message: `${chalk.blue.bold("6.")} ${chalk.bold(
      "What is the time complexity of binary search?"
    )}`,
    choices: ["O(log n)", "O(n)", "O(n log n)", "O(n^2)"],
    correctAnswer: "O(log n)",
  },

  {
    type: "list",
    name: "question7",
    message: `${chalk.blue.bold("7.")} ${chalk.bold(
      "Which is not a programming language?"
    )}`,
    choices: ["TypeScript", "Python", "HTML"],
    correctAnswer: "HTML",
  },

  {
    type: "list",
    name: "question8",
    message: `${chalk.blue.bold("8.")} ${chalk.bold(
      "Which language runs in a web browser?"
    )}`,
    choices: ["Java", "C", "JavaScript"],
    correctAnswer: "JavaScript",
  },

  {
    type: "list",
    name: "question9",
    message: `${chalk.blue.bold("9.")} ${chalk.bold(
      "What is a closure in JavaScript?"
    )}`,
    choices: [
      "A function bundled with its lexical environment",
      "An object with a set of methods",
      "A block of code that can be reused",
    ],
    correctAnswer: "A function bundled with its lexical environment",
  },
  
  {
    type: "list",
    name: "question10",
    message: `${chalk.blue.bold("10.")} ${chalk.bold(
      "What does the acronym REST stand for in web services?"
    )}`,
    choices: [
      "Representational State Transfer",
      "Reduced State Transfer",
      "Relational State Transfer",
      "Remote Execution Standard",
    ],
    correctAnswer: "Representational State Transfer",
  },
];

async function runQuiz() {
  console.log(welcomeMessage);
  console.log(
    chalk.cyan.bold(`
Get ready to challenge your coding knowledge with 10 exciting multiple-choice questions.
\nTest your skills, learn new things, and have fun! Good luck!
`)
  );

  let score = 0;
  const userAnswers = [];

  for (const question of questions) {
    const answer = await inquirer.prompt([
      {
        type: question.type,
        name: question.name,
        message: question.message,
        choices: question.choices,
      },
    ]);

    userAnswers.push({
      question: question.message,
      selected: answer[question.name],
      correct: question.correctAnswer,
    });

    if (answer[question.name] === question.correctAnswer) {
      score++;
    }
  }

  console.log(
    chalk.bold(
      `\nYou got ${chalk.blue.bold(score)} out of ${chalk.blue.bold(
        questions.length
      )} correct!\n`
    )
  );

  const reviewAnswer = await inquirer.prompt([
    {
      type: "confirm",
      name: "review",
      message: chalk.green("Would you like to review your answers?"),
      default: false,
    },
  ]);

  if (reviewAnswer.review) {
    console.log(chalk.green.bold("\nReview of your answers:\n"));

    userAnswers.forEach((answer, index) => {
      console.log(
        chalk.bold(
          `Question ${chalk.blue.bold(index + 1)}: ${chalk.bold(
            answer.question
          )}`
        )
      );
      console.log(
        chalk.bold(`Your answer: ${chalk.blue.bold(answer.selected)}`)
      );
      console.log(
        chalk.bold(`Correct answer: ${chalk.yellow.bold(answer.correct)}`)
      );
      console.log(
        chalk.bold(
          answer.selected === answer.correct
            ? "Status: Correct"
            : "Status: Incorrect"
        )
      );
      console.log("");
    });
  } else {
    console.log(chalk.green.bold("Thank you for taking the quiz!"));
  }
}

runQuiz();
