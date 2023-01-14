const sentence = require('./practice2.js');
const os = require('os');
const fs = require('fs');

const username = os.userInfo().username;

fs.writeFile('./content/practice.txt', sentence, 'utf8', (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('./content/practice.txt', username, { flag: 'a', encoding: 'utf8'}, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File Successfully Written.");
      }
    });
  }
});
