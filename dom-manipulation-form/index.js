document
  .getElementById("dataForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // Get selected food choices
    const foodChoices = [];
    const foodCheckboxes = document.querySelectorAll("input[type=checkbox]");
    foodCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        foodChoices.push(checkbox.value);
      }
    });

    if (foodChoices.length < 2) {
      alert("Please select at least two food options.");
      return;
    }

    // Create a new row for the table
    const table = document
      .getElementById("dataTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow();

    // Insert data into new row
    newRow.insertCell(0).innerText = firstName;
    newRow.insertCell(1).innerText = lastName;
    newRow.insertCell(2).innerText = email;
    newRow.insertCell(3).innerText = address;
    newRow.insertCell(4).innerText = pincode;
    newRow.insertCell(5).innerText = foodChoices.join(", ");
    newRow.insertCell(6).innerText = state;
    newRow.insertCell(7).innerText = country;

    // Clear form fields after submission
    document.getElementById("dataForm").reset();
  });