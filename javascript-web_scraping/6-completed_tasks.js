#!/usr/bin/node

const request = require('request');

request(process.argv[2], function (err, response, body) {
  if (err) { console.log(err); } else {
    const completed = {};
    for (const task of JSON.parse(body)) {
      if (task.completed === true) {
        if (completed[task.userId] === undefined) {
          completed[task.userId] = 1;
        } else {
          completed[task.userId] += 1;
        }
      }
    }
    console.log(completed);
  }
});
