// Created by: maliksalem
// Created on: March 2022
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)

  // output
  document.getElementById("address").innerHTML =
    "Your info is: " + firstName + ", age " + userAge + "."
}