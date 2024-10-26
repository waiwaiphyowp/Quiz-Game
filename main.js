const fruitBtn = document.getElementById("fruitBtn");
const animalBtn = document.getElementById("animalBtn")

//For fruit
const fruitQuestion = () => {
  document.getElementById("appleAns").style.display = "block";
  document.getElementById("fruitBtn").style.display = "block";
};
fruitBtn.addEventListener("click", fruitQuestion);

//For animal
const animalQuestion = () => {
  document.getElementById("rabbitAns").style.display = "block";
  document.getElementById("animalBtn").style.display = "block";
};
animalBtn.addEventListener("click", animalQuestion);

