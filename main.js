const startBtn = document.getElementById("startBtn");
const fruitBtn = document.getElementById("fruitBtn");
const animalBtn = document.getElementById("animalBtn");

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
    title: "Choose the animal",
    image: ".photo/rabbit.jepg",
    answer: [
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

