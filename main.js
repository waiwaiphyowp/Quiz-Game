const startBtn = document.getElementById("startBtn");
const fruitBtn = document.getElementById("fruitBtn");
const animalBtn = document.getElementById("animalBtn");
const questionTitle = document.getElementById("questionTitle");
const answerLists = document.getElementById("answerLists");
const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");

// question & answer
const questions = {
  fruit: 
  {
    title: "What is this fruit?",
    image: "./photo/fruit.jpeg",
    answers: [
      { name: 'Apple', correct: true},
      { name: 'Orange', correct: false},
      { name: 'Peach', correct: false}
    ]
  }, 

  animal: {
    title: "Choose the correct animal.",
    image: "./photo/rabbit.jpeg",
    answers: [
      { name: 'Tiger', correct: false},
      { name: 'Rabbit', correct: true},
      { name: 'Rat', correct: false}
    ]
  }
};

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
        message.innerText = "Correct!";
      } else {
        errorMessage.innerText = "Incorrect! Try again.";
      }
    };
    answerLists.appendChild(button);
  });
};



