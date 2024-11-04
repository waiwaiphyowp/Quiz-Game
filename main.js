// <------------------------ DOM Element Declarations ----------------------------->
/*
https://www.freecodecamp.org/news/javascript-in-the-browser-dom-and-events/
reference DOM from this link
*/

const startBtn = document.getElementById("startBtn");
const fruitBtn = document.getElementById("fruitBtn");
const animalBtn = document.getElementById("animalBtn");
const countryBtn = document.getElementById("countryBtn");

const questionTitle = document.getElementById("questionTitle");
const questionImage = document.getElementById("questionImage");
const answerLists = document.getElementById("answerLists");

const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");

// <------------------------ Variable Declarations ----------------------------->

let currentFruitIndex = 0; 
let currentAnimalIndex = 0;
let currentCountryIndex = 0;


// <------------------------ Array Structure ----------------------------->

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
  animal: [
  {
    title: "Guess the Animal",
    image: "./photo/rabbit.jpeg",
    answers: [
      { name: 'Tiger', correct: false },
      { name: 'Rabbit', correct: true },
      { name: 'Rat', correct: false }
    ]
  },
    {
      title: "Guess the Animal",
      image: "./photo/lion.jpg",
      answers: [
        { name: 'Lion', correct: true},
        { name: 'Elephant', correct: false},
        { name: 'Cat', correct: false}
      ]
    },
    {
      title: "Guess the Animal",
      image: "./photo/dog.jpg",
      answers : [
        { name: 'Ant', correct: false},
        { name: 'Dog', correct: true},
        { name: 'Bird', correct: false}
      ]
    },
  ], // closing animal question
  country: [
  {
    title: "Guess the Country",
    image: "./photo/singapore.jpg",
    answers: [
      { name: 'Singapore', correct: true },
      { name: 'Malaysia', correct: false },
      { name: 'Japan', correct: false }
    ]
  },
  {
    title: "Guess the Country", 
    image: "./photo/myanmar.png",
    answers: [
      { name: 'Canada', correct: false},
      { name: 'Morocoo', correct: false},
      { name: 'Myanmar', correct: true}
    ]
  },
  {
    title: "Guess the Country",
    image: "./photo/japan.jpg",
    answers: [
      { name: 'Japan', correct: true},
      { name: 'Brunei', correct: false},
      { name: 'Cuba', correct: false}
    ]
  }
],// closing country question
}; // closing main question

// <------------------------ Event Listeners ----------------------------->

// start 
startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  document.getElementById("category").style.display = "block";
});

// fruit
fruitBtn.addEventListener("click", () => {
  currentFruitIndex = 0; 
  displayQuestion('fruit');
  fruitBtn.style.display = "none"; //hidden after press button
});

// animal
animalBtn.addEventListener("click", () => {
  currentAnimalIndex = 0;
  displayQuestion('animal'); 
  animalBtn.style.display = "none";
});

// country
countryBtn.addEventListener("click", () => {
  currentCountryIndex = 0;
  displayQuestion('country');
  countryBtn.style.display = "none";
});

// <------------------------------- Function Declarations --------------------------------> 


/*show conditional message once at the time only
declare the function and assign the variable 
*/
const conditionMessages = () => { 
  message.innerHTML = ''; 
  errorMessage.innerHTML = '';
}

// for question & answer
const displayQuestion = (questionIndex) => {
  const currentQuestion = questions[questionIndex];

  /*
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
  https://www.freecodecamp.org/news/the-ternary-operator-in-javascript/
  reference to use Ternary Operators
  */
  const question = questionIndex === 'fruit' ? 
    currentQuestion[currentFruitIndex] : 

    questionIndex === 'animal' ?
    currentQuestion[currentAnimalIndex] : 

    currentQuestion[currentCountryIndex];

  questionTitle.innerText = question.title; 
  questionImage.src = question.image; 
  answerLists.innerHTML = '';
  conditionMessages();// call the function here relevant message "correct or incorrect"

  /* reference from this link  
  https://stackoverflow.com/questions/50528628/if-else-in-foreach 
  for forEach and loops 
  */
  question.answers.forEach(answer => { 
    const button = document.createElement('button');
    button.innerText = answer.name; 
    button.onclick = () => { 
      conditionMessages(); // call the function here relevant message "correct or incorrect"
      if (answer.correct) {
        message.innerText = "Correct!";
        // check fruit condition
        if (questionIndex === 'fruit') { 
          currentFruitIndex++; // Move to the next question
        // check animal condition
        } else if (questionIndex === 'animal') {
          currentAnimalIndex++;
        // check country condition
        } else if (questionIndex === 'country') {
          currentCountryIndex++;
        }
        /*
        https://stackoverflow.com/questions/36971374/run-code-after-some-time-has-passed-or-a-condition-is-met
        https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
        reference from here
        */
        setTimeout(() => {
          // console.log("current animal index:", currentAnimalIndex); using this code of line to debug for animal question
          if (questionIndex === 'fruit' && currentFruitIndex < questions.fruit.length) {
            displayQuestion('fruit');

          } else if (questionIndex === 'animal' && currentAnimalIndex < questions.animal.length) {
            displayQuestion('animal'); 
            
          } else if (questionIndex === 'country' && currentCountryIndex < questions.country.length) {
            displayQuestion('country');
          }
        }, 100); 
      } else {
        errorMessage.innerText = "Incorrect! Try again.";
      }
    };
    answerLists.appendChild(button);
  });
};

