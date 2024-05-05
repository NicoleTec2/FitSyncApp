function nextStep() {
  var signupForm = document.getElementById("signup-form");
  var nextBtn = document.getElementById("nextBtn");
  var submitBtn = document.getElementById("submitBtn");

  // Show next set of fields and buttons, hide current fields and button
  if (!document.getElementById("age").classList.contains("hidden")) {
    submitBtn.classList.remove("hidden");
    nextBtn.classList.add("hidden");
  }

  var inputs = signupForm.querySelectorAll("input, select");
  var filled = true;

  // Check if all fields are filled
  inputs.forEach(function(input) {
    if (!input.value && !input.classList.contains("hidden")) {
      filled = false;
      return;
    }
  });

  if (filled) {
    inputs.forEach(function(input) {
      if (input.classList.contains("hidden")) {
        input.classList.remove("hidden");
      }
    });
  } else {
    alert("Please fill in all fields.");
  }
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var goal = document.getElementById("goal").value;
  var weightGoal = document.getElementById("weight-goal").value;
  var illness = document.getElementById("illness").value;
  var goalDate = document.getElementById("goal-date").value;

  // You can perform validation and further processing here
  // For now, let's just log the values
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Age:", age);
  console.log("Gender:", gender);
  console.log("Weight:", weight);
  console.log("Height:", height);
  console.log("Goal:", goal);
  console.log("Weight Goal:", weightGoal);
  console.log("Illness:", illness);
  console.log("Goal Date:", goalDate);

  // Redirect to home page after submitting
  window.location.href = 'home.html';
}