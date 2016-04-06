
'use strict'

const INPUT_FILE = './iSideWith.txt';
const OUTPUT_FILE = './iSideWith.json';

let fs = require('fs');

let parseIssue = function(question) {
  let issue = question;
  issue = issue.slice(21, -8); // Slice for 'iSideWith'
  issue = issue.toUpperCase();
  return issue;
}

fs.readFile(INPUT_FILE, (err, data) => {
  if (err) throw err;
  let questions = data.toString().split('\n\n');
  let results = [];
  for (let i = 0; i < questions.length; i++) {
    let question = questions[i].split('\n');
    let questionJSON = {};
    questionJSON.issue = parseIssue(question[0]);
    questionJSON.question = question[1];
    questionJSON.description = question[2];
    questionJSON.answers = question.slice(3);
    results.push(questionJSON);
  }
  fs.writeFile(OUTPUT_FILE, JSON.stringify(results, 0, 4), (err) => {
    if (err) throw err;
    console.log("It saved to", OUTPUT_FILE);
  });
});
