// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html
"use strict"

/**
 * Calculate Trapezoid
 */
function Calculate() {
  // Get input values
  const lengthA = parseFloat(document.getElementById("Length-of-A-in-cm").value)
  const lengthB = parseFloat(document.getElementById("Length-of-B-in-cm").value)
  const height = parseFloat(document.getElementById("Length-of-H-in-cm").value)
  const resultDisplay = document.getElementById("Answer")

  // Calculate area of trapezoid: ((a + b) / 2) * h
  const area = ((lengthA + lengthB) / 2) * height

  // Display the result
  resultDisplay.innerHTML = `The area of the trapezoid is: <strong>${area.toFixed(2)}</strong> cm²`
}