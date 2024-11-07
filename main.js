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

const score = document.getElementById("score");
const message = document.getElementById("message");
const errorMessage = document.getElementById("errorMessage");

/* 
https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
https://mcasimirian.medium.com/playing-audio-on-click-in-your-javascript-app-72aa955068fc
https://www.w3schools.com/jsref/met_audio_play.asp
reference from here
https://mixkit.co/ audio from this link
*/
const btnSound = new Audio('./sound/click.wav');
const correctSound = new Audio('./sound/correct.mp4');
const wrongSound = new Audio('./sound/wrong.mp4');

// <------------------------ Variable Declarations ----------------------------->

let currentFruitIndex = 0; 
let currentAnimalIndex = 0;
let currentCountryIndex = 0;

let fruitScore = 0;
let animalScore = 0;
let countryScore = 0;

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
/*
https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
https://stackoverflow.com/questions/73847421/add-an-event-listener-on-an-element-ive-created-in-javascript
*/
// start 
startBtn.addEventListener("click", () => {
  btnSound.play(); //using play method 
  startBtn.style.display = "none";
  document.getElementById("category").style.display = "block";
});

// fruit
fruitBtn.addEventListener("click", () => {
  btnSound.play();
  currentFruitIndex = 0; 
  fruitScore = 0;
  displayQuestion('fruit');
  fruitBtn.style.display = "none"; //hidden after press button
});

// animal
animalBtn.addEventListener("click", () => {
  btnSound.play();
  currentAnimalIndex = 0;
  animalScore = 0;
  displayQuestion('animal'); 
  animalBtn.style.display = "none"
});

// country
countryBtn.addEventListener("click", () => {
  btnSound.play();
  currentCountryIndex = 0;
  countryScore = 0;
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
 // selecting the correct question
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
 // checking correct answer
  question.answers.forEach(answer => { 
    const button = document.createElement('button');
    button.innerText = answer.name; 
    button.onclick = () => { 
      conditionMessages(); // call the function here relevant message "correct or incorrect"

      /*
      https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
      https://medium.com/@ryan_forrester_/how-to-disable-a-button-in-javascript-how-to-guide-c253e1657451     
      reference from this link for using disabled
      */
      const clickButtons = answerLists.querySelectorAll('button');
      clickButtons.forEach(allButtons => allButtons.disabled = true);

      if (answer.correct) {
        message.innerText = "Correct!";
        correctSound.play();
       if (questionIndex === 'fruit') {
        fruitScore++; // add score
      } else if (questionIndex === 'animal') {
        animalScore++;
      } else if (questionIndex === 'country') {
        countryScore++;
      }
      } else {
        errorMessage.innerText = "Incorrect!";
        wrongSound.play();
      }
      totalScore(questionIndex); // for score

        // check fruit condition
        if (questionIndex === 'fruit') { 
          currentFruitIndex++; // Move to the next question
          // fruitScore++; can't add here not working
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
       //checking display next question
        setTimeout(() => {
          // console.log("current animal index:", currentAnimalIndex); using this code of line to debug for animal question
          if (questionIndex === 'fruit' && currentFruitIndex < questions.fruit.length) {
            displayQuestion('fruit');

          } else if (questionIndex === 'animal' && currentAnimalIndex < questions.animal.length) {
            displayQuestion('animal'); 
            
          } else if (questionIndex === 'country' && currentCountryIndex < questions.country.length) {
            displayQuestion('country');
          }
        }, 200);  
    };
    answerLists.appendChild(button);
  });
};

// display score
const totalScore = (category) => {
  if (category === 'fruit') {
    score.innerHTML = `Fruit Score: ${fruitScore}`;
  } else if (category === 'animal') {
    score.innerHTML = `Animal Score: ${animalScore}`;
  } else if (category === 'country') {
    score.innerText = `Country Score: ${countryScore}`;
  }
};