const alphabetNumberReference = {
'a': '1', 'b': '2'}

const alphabetNumbers = (string) => {

  const arrayOfString = toArray(string);
  const finalArray = []
  arrayOfString.forEach(character => {
    finalArray.push(alphabetNumberReference[character])
  })

  // if(string === 'a') {
  //   return '1'
  // }
  // return '1 2'

  return finalArray.join(" ")
}

const toArray = (stringToConvert) => {
  return stringToConvert
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
}
module.exports = alphabetNumbers
