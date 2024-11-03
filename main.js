/*
https://www.freecodecamp.org/news/javascript-in-the-browser-dom-and-events/
reference DOM from this link
*/

const startBtn = document.getElementById("startBtn");
const fruitBtn = document.getElementById("fruitBtn");
const animalBtn = document.getElementById("animalBtn");
const countryBtn = document.getElementById("countryBtn");
const questionTitle = document.getElementById("questionTitle");
const answerLists = document.getElementById("answerLists");
const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");
const questionImage = document.getElementById("questionImage");

let currentFruitIndex = 0; 
/*
https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/
reference array from this link
*/

// question & answer
const questions = {
  fruit: [
    {
      title: "Guess the Fruit",
      image: "./photo/fruit.jpeg",
      answers: [
        { name: 'Apple', correct: true },
        { name: 'Orange', correct: false },
        { name: 'Peach', correct: false }
      ],
    }, 
    {
      title: "Guess the Fruit",
      image: "./photo/cherry.jpeg",
      answers: [
        { name: 'grape', correct: false },
        { name: 'Cherry', correct: true },
        { name: 'Blueberry', correct: false }
      ],
    },
    {
      title: "Guess the Fruit",
      image: "./photo/kiwi.jpg",
      answers: [
        { name: 'Banana', correct: false },
        { name: 'Coconut', correct: false },
        { name: 'Kiwi', correct: true }
      ],
    },

  ], // closing fruit question
  animal: {
    title: "Guess the Animal",
    image: "./photo/rabbit.jpeg",
    answers: [
      { name: 'Tiger', correct: false },
      { name: 'Rabbit', correct: true },
      { name: 'Rat', correct: false }
    ]
  },
  country: {
    title: "Guess the Country",
    image: "./photo/singapore.jpg",
    answers: [
      { name: 'Singapore', correct: true },
      { name: 'Malaysia', correct: false },
      { name: 'Japan', correct: false }
    ]
  },
}; // closing main question

// start 
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  document.getElementById("category").style.display = "block";
});

// fruit
fruitBtn.addEventListener("click", () => {
  currentFruitIndex = 0; 
  displayQuestion('fruit');
});

// animal
animalBtn.addEventListener("click", () => {
  displayQuestion('animal'); 
});

// country
countryBtn.addEventListener("click", () => {
  displayQuestion('country');
});

// show conditional message once at the time only
const conditionMessages = () => { 
  message.innerHTML = '';
  errorMessage.innerHTML = '';
}

// for question & answer
const displayQuestion = (questionIndex) => {
  const currentQuestion = questions[questionIndex];

  const question = questionIndex === 'fruit' ?
  currentQuestion[currentFruitIndex] : currentQuestion;
  
  questionTitle.innerText = question.title; 
  questionImage.src = question.image; 
  answerLists.innerHTML = '';
  conditionMessages();

  /* reference from this link  
  https://stackoverflow.com/questions/50528628/if-else-in-foreach 
  for forEach and loops 
  */
  question.answers.forEach(answer => { 
    const button = document.createElement('button');
    button.innerText = answer.name; 
    button.onclick = () => { 
      conditionMessages();
      if (answer.correct) {
        message.innerText = "Correct!";
        if (questionIndex === 'fruit') {
          currentFruitIndex++; // Move to the next question
          setTimeout(() => {
            displayQuestion('fruit'); // Show the next question
          }, 100); 
        }
      } else {
        errorMessage.innerText = "Incorrect! Try again.";
      }
    };
    answerLists.appendChild(button);
  });
};