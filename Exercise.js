function logExercise() {
  var exerciseType = document.getElementById("exercise-type").value;
  var duration = document.getElementById("duration").value;

  if (duration === "") {
    alert("Please enter the duration of your exercise.");
    return;
  }

  var exerciseHistory = document.getElementById("exercise-history");
  var listItem = document.createElement("li");
  listItem.textContent = `Type: ${exerciseType}, Duration: ${duration} minutes`;
  exerciseHistory.appendChild(listItem);

  // Clear input fields
  document.getElementById("duration").value = "";
}