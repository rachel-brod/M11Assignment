//STEP 1
/*
function sortLetters() {
    let string = prompt('Enter a string.')
    return string.match(/./g).sort()
}
console.log(sortLetters())
*/

//STEP 2
/*
function titleCaseString() {
let string = prompt('Enter a string.')
let wordsArray = string.split(' ')

    for (i=0; i < wordsArray.length; i++) {
        wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() +wordsArray[i].slice(1)
    }

let newString = wordsArray.join(' ')
return newString
}
console.log(titleCaseString())
*/

//STEP 3
/*
function countVowels() {
    let string = prompt('Enter a string.')
    let vowels = string.match(/[a,e,i,o,u]/g)
    return vowels.length
}
console.log(countVowels())
*/

//STEP 4
/*
function generateID() {
    let length = Number(prompt('Enter a number for the unique ID length.'))
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let charactersLength = characters.length
    let uniqueID = ''
    for (i = 0; i < length; i++) {
        uniqueID += characters.charAt(Math.round(Math.random() * charactersLength))
    }
    return uniqueID
}
console.log(generateID())
*/


//STEP 5
/*
function getLongestCountryName() {
    let countryNames = prompt('Enter your countries and seperate each with a comma.').split(',')
    let longestCountry = null

    for (i = 0; i < countryNames.length; i++) {
        let current = countryNames[i].length
            if (current > longestCountry) {
                longestCountry = current
                longestCountryName = countryNames[i]
            } 
        }
        return longestCountryName
}

console.log(getLongestCountryName())
*/


