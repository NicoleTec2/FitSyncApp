function logWater() {
  var cupsInput = document.getElementById("cups");
  var cups = parseInt(cupsInput.value);

  // Update water intake history
  var historyList = document.getElementById("water-history");
  var listItem = document.createElement("li");
  var currentDate = new Date().toLocaleDateString();
  listItem.textContent = `${cups} cups - ${currentDate}`;
  historyList.appendChild(listItem);

  // Update water intake goal
  var cupsLeftElement = document.getElementById("cups-left");
  var cupsLeft = parseInt(cupsLeftElement.textContent);
  var newCupsLeft = cupsLeft - cups;
  cupsLeftElement.textContent = newCupsLeft;

  // Clear input field
  cupsInput.value = "";
}