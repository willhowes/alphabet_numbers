const alphabetNumberReference = {
'a': '1', 'b': '2', 'z': '26'}

const alphabetNumbers = (string) => {

  const arrayOfString = toArray(string);
  const finalArray = []
  arrayOfString.forEach(character => {
    finalArray.push(alphabetNumberReference[character])
  })

  return finalArray.join(" ")
}

const toArray = (stringToConvert) => {
  return stringToConvert
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
}
module.exports = alphabetNumbers
