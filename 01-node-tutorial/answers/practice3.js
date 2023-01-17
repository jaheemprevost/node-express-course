const fs = require('fs').promises;

const makeFile = async function() {
  try {
    await fs.writeFile(
      './content/practice2.txt', 
      'This is the first line\n',
      'utf8'  
      );

    for (let i = 2; i <= 10; i++) {
      await fs.writeFile(
        './content/practice2.txt', 
        `This is line ${i}\n`,
        {
          flag: 'a',
          encoding: 'utf8'
        } 
        );
    }
  } catch(err) {
    console.log(err);
  }
};

makeFile();
