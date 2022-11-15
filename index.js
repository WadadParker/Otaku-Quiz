var readlineSync = require('readline-sync');
var name = readlineSync.question("Please enter your name ");
console.log("Welcome! " + name + " to the ANIME quiz");
console.log("We have 3 levels, of 2 questions each. You need to get all questions correct to proceed to next level ");

var score = 0;
function quiz(ques, ans, choice) {
  var ques1 = readlineSync.keyInSelect(choice, ques)
  if (choice[ques1].toUpperCase() === ans.toUpperCase()) {
    console.log("Correct");
    score++;
  }
  else {
    console.log("Wrong, answer is: ", ans);
  }
  console.log("score is ", score);
}

var arr = [
  question1 = {
    question: "Who is the main character of Death Note? ",
    answer: "Light Yagami",
    choice: ["Naruto Uzumaki", "Light Yagami", "Goku"]
  },
  question2 = {
    question: "What is the name of Naruto's father? ",
    answer: "Minato",
    choice: ["Madara", "Jiraya", "Minato"]
  },
  question3 = {
    question: "What is the name of Captain of Black Bulls? ",
    answer: "Yami",
    choice: ["Yami", "Levi", "Oden"]
  },
  question4 = {
    question: "Who is the father of Gon? ",
    answer: "Ging Freecss",
    choice: ["Gin Freecss", "Ging Freecss", "Mito Freecss"]
  },
  question5 = {
    question: "How many characters does Goku kill? ",
    answer: "Two",
    choice: ["One", "Two", "Three"]
  },
  question5 = {
    question: "Which anime does this dialouge belong: Zura jara, Katsura da? ",
    answer: "Gintama",
    choice: ["Bleach", "Beastars", "Gintama"]
  }

]

var highScore = {
  name: "Wadad",
  score: 5
}
console.log("lets begin");
for (var i = 0; i < arr.length; i++) {
  console.log("Question ", i + 1);
  quiz(arr[i].question, arr[i].answer, arr[i].choice);
  console.log("--------------------------------------");
  if (i === 1 && score !== 2) {
    console.log("You have failed to clear level 1");
    console.log("--------------------------------------");
    break;
  }
  if (i === 3 && score !== 4) {
    console.log("You have failed to clear level 2");
    console.log("--------------------------------------");
    break;
  }
}
console.log("We have finished the quiz, your score is ", score);

if (score > highScore.score) {
  console.log("You beat the highscore of ", highScore.name, " Congratulations! Send me a screenshot to update the highscore");
}
else {
  console.log("Highscore of " + highScore.score + " is currently taken by " + highScore.name);
}