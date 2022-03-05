"use strict";

const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

// funkcja zmieniająca °C na °F na przycisku ZAMIEŃ
const swap = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = ""; // czyszczenie wyniku po kliknięciu zamień""
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = ""; // czyszczenie wyniku po kliknięciu zamień""
	}
};

// funkcja konwertująca °C na °F
const fahrToCel = () => {
	fahrenheit = converter.value * 1.8 + 32;
	result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`;
	converter.value = ""; // czyszczenie pola wprowadzania wartości po kliknięciu "konwertuj"
};

// funkcja konwertująca °F na °C
const celToFahr = () => {
	celsius = (converter.value - 32) / 1.8;
	result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
	converter.value = ""; // czyszczenie pola wprowadzania wartości po kliknięciu "konwertuj"
};

// funkcja zmieniająca wynik °C na °F po kliknięciu "zamień"
const conversion = () => {
	if (converter.value !== "") {
		if (one.textContent === "°C") {
			fahrToCel();
		} else {
			celToFahr();
		}
	} else {
		result.textContent = "Musisz podać wartość!";
	}
};

// funkcja czyszcząca wynik oraz pole do wprowadzania wartości
const reset = () => {
	converter.value = "";
	result.textContent = "";
};

changeBtn.addEventListener("click", swap);
convBtn.addEventListener("click", conversion);
resetBtn.addEventListener("click", reset);
