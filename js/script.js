// Created by: maliksalem
// Created on: March 2022
// This file contains the JS functions for index.html

/**
 * This function gets users first name and age and shows it back to user.
 */
function enterClicked() {
  // input
  const streetnumber = parseInt(document.getElementById("street-number-entered").value)
  const streetname = document.getElementById("Street-name").value
  // output
  document.getElementById("address").innerHTML =
    "Your address is: " + streetnumber + streetname + "."
}