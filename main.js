const startBtn = document.getElementById("startBtn");
const fruitBtn = document.getElementById("fruitBtn");
const animalBtn = document.getElementById("animalBtn");
const countryBtn = document.getElementById("countryBtn");
const questionTitle = document.getElementById("questionTitle");
const answerLists = document.getElementById("answerLists");
const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");

// question & answer
const questions = {
  fruit: {
    title: "Guess the Fruit",
    image: "./photo/fruit.jpeg",
    answers: [
      { name: 'Apple', correct: true},
      { name: 'Orange', correct: false},
      { name: 'Peach', correct: false}
    ],
  }, // fruit question closing
  
  animal: {
    title: "Guess the Animal",
    image: "./photo/rabbit.jpeg",
    answers: [
      { name: 'Tiger', correct: false},
      { name: 'Rabbit', correct: true},
      { name: 'Rat', correct: false}
    ]
  }, // animal question closing

  country: {
    title: "Guess the Country",
    image: "./photo/singapore.jpg",
    answers: [
      { name: 'Singapore', correct: true},
      { name: 'Malaysia', correct: false},
      { name: 'Japan', correct: false}
    ]
  }, //country closing

}; // main question closing



// start 
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  document.getElementById("category").style.display = "block";
});

// fruit
fruitBtn.addEventListener("click", () => {
  displayQuestion('fruit');
});

// animal
animalBtn.addEventListener("click", () => {
  displayQuestion('animal'); 
});

// country
countryBtn.addEventListener("click", () => {
  displayQuestion('country');
})

//for question & answer
const displayQuestion = (questionIndex) => {
  const currentQuestion = questions[questionIndex];
  questionTitle.innerText = currentQuestion.title;
  questionImage.src = currentQuestion.image;
  answerLists.innerHTML = '';
  message.innerHTML = '';
  errorMessage.innerHTML = '';
  
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.name;
    button.onclick = () => {
      if(answer.correct) {
        message.innerText = "Correct!"
        } else {
        errorMessage.innerText = "Incorrect! Try again.";
      }
    };
    answerLists.appendChild(button);
  });
};



