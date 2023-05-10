//STEP 1
/*
let month = parseInt(prompt("Enter a month numberically (e.g., 6 for June)."))
let year = parseInt(prompt("Enter a year numberically with four digits (e.g., 2023)."))

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
}
console.log(getDaysInMonth(month,year))
*/

//STEP 2
/*let d = prompt('Enter a date in the format XX-XX-XXXX. (Month-Day-Year)')
let day = d.slice(3,5)
let month = d.slice(0,2)-1
let year = d.slice(6,10)

let date = new Date(year, month, day)

console.log(date.toLocaleString('default', {month: 'long'}))
*/

//STEP 3
/*let d = prompt('Enter a date in the format XX-XX-XXXX. (Month-Day-Year)')
let day = d.slice(3,5)
let month = d.slice(0,2)-1
let year = d.slice(6,10)

let date = new Date(year, month, day)

if (date.getDay() == 0 || date.getDay() == 6) {
    console.log('this day is on a weekend')
} else {
    console.log('this day is on a weekday')
}
*/

//STEP 4
/*let d = prompt('Enter a date in the format XX-XX-XXXX. (Month-Day-Year)')
let day = d.slice(3,5)-1
let month = d.slice(0,2)-1
let year = d.slice(6,10)

let date = new Date(year, month, day)
console.log(date.toDateString().slice(0,3)+'day')
*/


//STEP 5
/*
let date = new Date()
console.log(date.toDateString().slice(0,1))
*/