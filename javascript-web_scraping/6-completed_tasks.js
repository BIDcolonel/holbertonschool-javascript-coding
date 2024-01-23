#!/usr/bin/node
const request = require('request');

request(process.argv[2], (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const todo = JSON.parse(body);
    const completedTasksByUser = {};
    for (const task of todo) {
      if (task.completed) {
        const userId = task.userId;
        if (completedTasksByUser[userId]) {
          completedTasksByUser[userId]++;
        } else {
          completedTasksByUser[userId] = 1;
        }
      }
    }

    console.log(completedTasksByUser);
  } else {
    console.error(error || `Code d'état ${response.statusCode}`);
  }
});
