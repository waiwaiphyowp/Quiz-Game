const startBtn = document.getElementById("startBtn");
const fruitBtn = document.getElementById("fruitBtn");
const answerListsDiv = document.getElementById("answerLists");
const changeBtn = document.getElementById("changeBtn");
const animalListsDiv = document.getElementById("animalLists");

//Start Button
const startBtnClick = () => {
  document.getElementById("startBtn").style.display = "none";
  document.getElementById("category").style.display = "block";
}
startBtn.addEventListener("click", startBtnClick);

// Change Question & show animal question
const changeBtnClick = () => {
  document.getElementById("changeBtn").style.display = "block";
  document.getElementById("animalContainer").style.display = "block";
  document.getElementById("appleContainer").style.display = "none";

  const animalAnswers = [
    { name: 'Tiger'},
    { name: 'Rabbit'},
    { name: 'Rat'}
  ];
  animalListsDiv.innerHTML = '';

  animalAnswers.forEach(animalAnswers => {
    const button = document.createElement('button');
    button.innerText = animalAnswers.name;
    animalListsDiv.appendChild(button);
  });
};
changeBtn.addEventListener("click", changeBtnClick);

//For fruit
const fruitQuestion = () => {
  document.getElementById("appleContainer").style.display = "block";
  document.getElementById("fruitBtn").style.display = "none";

  const answers = [
    { name: 'Apple'},
    { name: 'Orange'},
    { name: 'Peach'}
  ]

  answerListsDiv.innerHTML = '';

  answers.forEach(answers => {
    const button = document.createElement('button');
    button.innerText = answers.name;
    answerListsDiv.appendChild(button);
  });
};
fruitBtn.addEventListener("click", fruitQuestion);

