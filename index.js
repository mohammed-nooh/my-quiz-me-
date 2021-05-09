
var readlineSync=require("readline-sync");

var score=0;

var userName=readlineSync.question("what is your name  \n");

console.log("welcome "+ userName +" to Do YOU KNOW NOOH\n");

function play(q,a){
  var ua=readlineSync.question(q);
  
  if(ua===a){
    console.log("you are right\n");
    score++
  }
  else{
    console.log("you are wrong sorry the correct answer is "+ a +"\n");

  }

  console.log("your score is "+ score +"\n");

}




var array =[
 {
    question:"what is my age? ",
    answer:"21",
  },
  {
    question:"where do i live? ",
    answer:"calicut",
  },
  {
    question:"where do i work? ",
    answer:"google",
  },
  {
    question: "Who is my favorite superhero? ",
    answer: "superman",
  },
  {
    question: "Which is my favorite  song? ",
    answer: "hymn for the weekend",

  },
]

for(i=0;i<array.length;i++){
  console.log(i+1) 
  play(array[i].question,array[i].answer);

}

console.log("congrats your final score is "+ score +"\n\n");


var highscore=[
  {
    name:"kd",
    score:"5",
  },
  {
    name:"jimin",
    score:"4",
  },
  {
    name:"thadiyan",
    score:"3",
  },
]

console.log("the highscores are\n\n");

console.table(highscore);



console.log("if you have beaten the highscore please screenshot me the pic and i will upload it onto the game thank you for playing");