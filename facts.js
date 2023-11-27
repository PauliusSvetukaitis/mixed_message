const randFacts = () => {
    
    /* declaring my arrays for the messages and lucky numbers */
    
    let facts = ['Hot water will turn into ice faster than cold water','Avocados are a fruit, not a vegetable','The Eiffel Tower can be 15 cm taller during the summer',
    'Trypophobia is the fear of closely-packed holes','Australia is wider than the moon',
    'Human teeth are the only part of the body that cannot heal themselves.','It\'s illegal to own just one guinea pig in Switzerland.',
    'The Ancient Romans used to drop a piece of toast into their wine for good health','The heart of a shrimp is located in its head.',
    'People are more creative in the shower','Baby rabbits are called kits','The unicorn is the national animal of Scotland',
    'Venus is the only planet to spin clockwise','Nutmeg is a hallucinogen.','Competitive art used to be an Olympic sport.',
    'Walt Disney currently holds the most Academy Awards','Queen Elizabeth II was a trained mechanic.',
    'The Easter Island heads have bodies.','The real name for a hashtag is an octothorpe.',
    'You can hear a blue whale\s heartbeat from over 2 miles away.'];
    
    let luckyNum = [1,2,3,4,5,6,7,8,9];

    /* shuffling luckyNum to get a random number from the array via Fisher-Yates logorithm*/

    function shuffle(luckyNum) {
        for (let i = luckyNum.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [luckyNum[i], luckyNum[j]] = [luckyNum[j], luckyNum[i]];
        }
      }
    shuffle(luckyNum);
    const randNum = luckyNum[0];
    
    /* declaring facts to be a random via built in Math method */

    const randFacts = facts[Math.floor(Math.random() * facts.length)];

    return `Did you know that:${randFacts}, and that your lucky number is ${randNum}?`;

};

console.log(randFacts());
