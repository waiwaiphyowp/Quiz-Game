const startBtn = document.getElementById("startBtn");
const fruitBtn = document.getElementById("fruitBtn");
const animalBtn = document.getElementById("animalBtn");

//Start Button
const startBtnClick = () => {
  document.getElementById("category").style.display = "block";
  document.getElementById("startBtn").style.display = "none";
}
startBtn.addEventListener("click", startBtnClick);

//For fruit
const fruitQuestion = () => {
  document.getElementById("appleAns").style.display = "block";
  document.getElementById("fruitBtn").style.display = "none";
};
fruitBtn.addEventListener("click", fruitQuestion);


