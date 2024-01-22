#!/usr/bin/node

const request = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/';

request(process.argv[2], (error, response, body) => {
  if (error) {
    console.error(`${error}`);
  } else {
    const movies = JSON.parse(body).results;
    const wedgeAntilles = movies.filter(movie =>
      movie.characters.find(character => character.endsWith('/18/')));
    console.log(`${wedgeAntilles.length}`);
  }
});
