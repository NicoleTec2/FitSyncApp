// JavaScript code goes here
function logMeal() {
  var mealType = document.getElementById("meal-type").value;
  var food = document.getElementById("food").value;
  var grams = document.getElementById("grams").value;

  var mealList = document.getElementById(mealType + "-list");
  var listItem = document.createElement("li");
  listItem.textContent = food + " - " + grams + "g"

  mealList.appendChild(listItem);
}

function trackMacronutrients() {
  var carbs = parseInt(document.getElementById("carbs").value);
  var protein = parseInt(document.getElementById("protein").value);
  var fats = parseInt(document.getElementById("fats").value);

  var totalCarbs = document.getElementById("total-carbs");
  var totalProtein = document.getElementById("total-protein");
  var totalFats = document.getElementById("total-fats");

  totalCarbs.textContent = "Total Carbs: " + carbs + "g";
  totalProtein.textContent = "Total Protein: " + protein + "g";
  totalFats.textContent = "Total Fats: " + fats + "g";
}

function goTo(page) {
  // Redirect to the specified page
}