// var uservalue = +prompt("enter your value")
// if (uservalue > 10) {
//     document.write(uservalue)
// } else{
//     document.write('garaq ho')
// }
// var guess = prompt('enter bond number')
// guess = Number(guess)
// var secretnumber = 15
// var lowprize = {min:6 ,max:14, }
// var lownumber = 14
// var highnumber = 100
// var mediumnumber = 50
// if (guess<=14) {
//     document.write('cogragulation you won lowprize')
// }else if (guess<=50) {
//     document.write('cogragulation you midium prize')
// } else if(guess<=100) {
//     document.write('cogragulation you high prize')
// } else {
//     document.write('garaq hoja')
// }
// Password Generator
function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
    console.log("Generated Password:", password);
  }
  
  // Word Reverser
  function reverseWords(sentence) {
    const words = sentence.split(' ');
    const reversedSentence = words.reverse().join(' ');
    console.log("Reversed Sentence:", reversedSentence);
  }
  
  // Word Capitalizer
  function capitalizeWords(sentence) {
    const words = sentence.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const capitalizedSentence = capitalizedWords.join(' ');
    console.log("Capitalized Sentence:", capitalizedSentence);
  }
  
  // Word Finder
  function findWord(sentence, word) {
    if (sentence.includes(word)) {
      console.log("Word found");
    } else {
      console.log("Word not found");
    }
  }
  
  // String Concatenation
  function concatenateNames(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    console.log("Full Name:", fullName);
  }
  
  // Test cases
  generatePassword();
  reverseWords("This is a sample sentence");
  capitalizeWords("this is a capitalized sentence");
  findWord("Hello world", "world");
  concatenateNames("John", "Doe");
  

