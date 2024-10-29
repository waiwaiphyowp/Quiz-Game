const startBtn = document.getElementById("startBtn");
const fruitBtn = document.getElementById("fruitBtn");
const answerListsDiv = document.getElementById("answerLists");

//Start Button
const startBtnClick = () => {
  document.getElementById("category").style.display = "block";
  document.getElementById("startBtn").style.display = "none";
}
startBtn.addEventListener("click", startBtnClick);

//For fruit
const fruitQuestion = () => {
  document.getElementById("appleContainer").style.display = "block";
  document.getElementById("fruitBtn").style.display = "none";

  const answers = [
    { name: 'Apple'},
    { name: 'Orange'},
    { name: 'Peach'}
  ];

  answerListsDiv.innerHTML = '';

  answers.forEach(answers => {
    const button = document.createElement('button');
    button.innerText = answers.name;
    answerListsDiv.appendChild(button);
  })
};
fruitBtn.addEventListener("click", fruitQuestion);