// script.js
function addGoal() {
  var goalInput = document.getElementById('goal').value;
  var deadlineInput = document.getElementById('deadline').value;
  
  if (goalInput === '' || deadlineInput === '') {
    alert('Please enter a goal and deadline.');
    return;
  }
  
  var goalsList = document.getElementById('goals');
  var listItem = document.createElement('li');
  listItem.innerHTML = `<input type="checkbox" onclick="completeGoal(this)"> ${goalInput} - Deadline: ${deadlineInput}`;
  goalsList.appendChild(listItem);
  
  document.getElementById('goal').value = '';
  document.getElementById('deadline').value = '';
}

function completeGoal(checkbox) {
  if (checkbox.checked) {
    checkbox.parentElement.classList.add('completed');
    var remainingGoals = document.querySelectorAll('li:not(.completed)').length;
    alert('Congratulations on completing a goal! You have ' + remainingGoals + ' goals left.');
  } else {
    checkbox.parentElement.classList.remove('completed');
  }
}