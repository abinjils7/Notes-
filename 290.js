let pattern = "abba";
let s = "dog cat cat dog";

var wordPattern = function (pattern, s) {
  let words = s.split(" "); 
  // console.log(words) this will split the string s to array of words [ 'dog', 'cat', 'cat', 'dog' ]

  if (pattern.length !== words.length) {
    return false; 
    //check if the both have different lenght return false wee need the exact patern length
  }

  const mapCharToWord = new Map(); 
  const mapWordToChar = new Map();

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    // console.log(char);
    let word = words[i];
    // console.log(word)
    if (mapCharToWord.has(char)) {
      if (mapCharToWord.get(char) !== word) {
        return false;
      }
    } else {
      mapCharToWord.set(char, word);
    }
    if (mapWordToChar.has(word)) {
      if (mapWordToChar.get(word) !== char) {
        return false;
      }
    } else {
      mapWordToChar.set(word, char);
    }
  }

  return true;
};

console.log(wordPattern(pattern, s));
