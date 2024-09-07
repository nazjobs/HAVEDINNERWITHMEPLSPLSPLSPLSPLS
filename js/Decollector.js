document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button');
  button.addEventListener('click', () => {
    const data = collectPageData();
    sendDataToGoogleSheet(data);
  });
});

function collectPageData() {
  const data = {};

  // Collecting the NO count, need to create the local strage tho so check for the index.html
  data.noCount = localStorage.getItem('noCount') || 0;

  // Collect data from the current Foood page you get the gist of it the next will be the other page
  if (document.querySelectorAll('input[name="food"]').length > 0) {
    const selectedFoods = [];
    document.querySelectorAll('input[name="food"]:checked').forEach((checkbox) => {
      selectedFoods.push(checkbox.value);
    });
    data.foods = selectedFoods;
  }

  if (document.querySelectorAll('input[name="dessert"]').length > 0) {
    const selectedDesserts = [];
    document.querySelectorAll('input[name="dessert"]:checked').forEach((checkbox) => {
      selectedDesserts.push(checkbox.value);
    });
    data.desserts = selectedDesserts;
  }

  if (document.querySelectorAll('input[name="activities"]').length > 0) {
    const selectedActivities = [];
    document.querySelectorAll('input[name="activities"]:checked').forEach((checkbox) => {
      selectedActivities.push(checkbox.value);
    });
    data.activities = selectedActivities;
  }

  const dateInput = document.querySelector('input[type="date"]');
  if (dateInput) {
    data.selectedDate = dateInput.value;
  }

  return data;
}
//AND WE ARE DONE WITH THE COLLECTION

function sendDataToGoogleSheet(data) {
   // Send the foods no fucking errors... yeh? no? no? yeh? okay. 
<<<<<<< HEAD
  fetch('https://script.google.com/macros/s/AKfycbwAe_SrYDtETyfX_sIh3R4-NN0BVOzQFhQTUBe3Ce5e1RT518P7EW0ay6Y7Y24m5aU/exec', {
    // mode: 'no-cors',
=======
  fetch('https://script.google.com/macros/s/AKfycbwLxgFt87T4zYa8zcueb7QPOyzKAYN4jUBJZ_6I3UdtmaNBfDal8_2qeD8X4mkVgZKQ/exec', {
    mode: 'no-cors',
>>>>>>> parent of 00ececb (another removing of cors)
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
      // Um if MY CALCULATION ARE CORRECT THIS SHOULD redirect the page
    window.location.href = 'nextPage.html';
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
