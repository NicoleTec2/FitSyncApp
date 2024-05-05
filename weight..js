function logWeight() {
  var weightInput = document.getElementById('weight');
  var dateInput = document.getElementById('date');
  var weight = weightInput.value;
  var date = dateInput.value;

  if (weight === '' || date === '') {
    alert('Please enter both weight and date.');
    return;
  }

  var historyList = document.getElementById('weight-history');
  var listItem = document.createElement('li');
  listItem.textContent = `Date: ${date}, Weight: ${weight} lbs/kg`;
  historyList.appendChild(listItem);

  // Clear input fields
  weightInput.value = '';
  dateInput.value = '';
}
