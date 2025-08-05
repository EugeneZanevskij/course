function missingWord(nums, str) {
  // Jenny needs your help...
  nums.sort((a, b)=> a-b)
  const updatedString = str.toLowerCase().replaceAll(" ", '')
//   nums.forEach((num, index) => {
//     console.log(updatedString[num])
//   })
    let result = '';
    for (let i = 0; i < nums.length; i++) {
        console.log(updatedString[nums[i]])
        if (updatedString[nums[i]] === undefined) {
            return "No mission today";
        }
        if (!updatedString[nums[i]]) {
            return "No mission today";
        }
        if (nums[i] >= updatedString.length) {
            return "No mission today";
        }
        result += updatedString[nums[i]]
    }
    console.log(result)
    return result;
}

missingWord([0,3,5], "I love you")

function reverseString(str) {
  return str.split('').reverse().join('')
}

function reverseWords(str) {
  const words = str.split(" ")
  const reversedWords = words.map((word, index) => {
    return word.split("").reverse().join('');
  })
  return reversedWords.join(" ")
}

console.log(reverseString('This is an example!'))
console.log(reverseWords('This is an example!'))