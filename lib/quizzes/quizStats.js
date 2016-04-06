'use strict'

const INPUT_JSON = './iSideWith.json';

let _ = require('lodash');

let quiz = require(INPUT_JSON);

let issueQuestionBreakdown = function() {
  let issues = {};
  let issueCount = 0;
  let topicCount = 0;
  quiz.forEach((question) => {
    if (!issues.hasOwnProperty(question.issue)) {
      issues[question.issue] = 0;
      issueCount++;
    }
    issues[question.issue]++;
    topicCount++;
  });
  console.log('There are', issueCount, 'issues and a total', topicCount, 'current topics:');
  _.forEach(issues, (questions, issue) => {
    let focus = Math.floor(questions / topicCount * 100 * 100) / 100;
    let result = issue + ':  ' + questions + ' questions (' + focus + '% of focus)';
    console.log(result);
  });
}

issueQuestionBreakdown();
