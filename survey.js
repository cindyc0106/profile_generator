const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name?', (name) => {

  rl.question('What\'s an activity you like doing?', (activity) => {

    rl.question('What do you listen to while doing that?', (music) => {

      rl.question('Which meal is your favourite?', (meal) => {

        rl.question('Which sport is your absolute favourite?', (sport) => {

          console.log(`Thank you for your valuable feedback: ${name}. ${name} likes to ${activity} while listening to ${music}. ${meal} is ${name}'s favourite meal and favourite sport is ${sport}`);

          rl.close();
        });

      });
    });
  });
});