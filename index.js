let inputEl = document.getElementById("input-el")
let btnEl = document.getElementById("btn-el")
let inputNum = Number(" ")
let lengthEl = document.getElementById("length-el")
let massEl = document.getElementById("mass-el")
let volumeEl = document.getElementById("volume-el")

const meterToFeet = 3.281;
const leterToGalon = 0.264;
const kiloToPound = 2.205;
const feetToMeter = 0.305;
const galonToLeter = 3.785;
const poundToKilo = 0.454;






btnEl.addEventListener("click", function(){
    inputNum = inputEl.value
    inputEl.value = Number()
    renderConvertion()
   
})


function renderConvertion(){
    lengthEl.innerHTML = ` 
                          ${inputNum} meters = ${ (inputNum * meterToFeet).toFixed(3)}  feet | ${inputNum} feet = ${(inputNum * feetToMeter).toFixed(3)} meters
                         
                          `
    volumeEl.innerHTML = ` 
                          ${inputNum} liters = ${(inputNum * leterToGalon).toFixed(3)}  gallons | ${inputNum} gallons = ${(inputNum * galonToLeter).toFixed(3)} liters
                         
                          `
    massEl.innerHTML = ` 
                          ${inputNum} kilos = ${(inputNum * kiloToPound).toFixed(3)}  pounds | ${inputNum} pounds = ${(inputNum * poundToKilo).toFixed(3)} kilos
                         
                          `
}
