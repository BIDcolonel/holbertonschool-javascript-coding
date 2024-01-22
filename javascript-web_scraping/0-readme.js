#!/usr/bin/node

const fs = require('fs');

try {
  console.log(fs.readFileSync(process.argv[2], 'utf-8'));
} catch (err) {
  console.error(err);
}
