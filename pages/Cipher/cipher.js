/* let alpha = {'A':'0,0,0,0,0', 'B': '0,0,0,0,1', 'C': '00010', 'D': '00011', 'E': '00100',
          'F': '00101', 'G': '00110', 'H': '00111', 'I': '01000', 'J': '01000', 'K': '01001', 'L': '01010', 'M': '01011', 'N': '01100', 'O': '01101', 'P': '01110', 'Q': '01111', 'R': '10000', 'S': '10001', 'T': '10010','U': '10011', 'V': '10011', 'W': '10100', 'X': '10101', 'Y': '10110', 'Z': '10111'} 
          let alphaArray= {'A':[0,0,0,0,0], 'B': [0,0,0,0,1], 'C': [0,0,0,1,0], 'D': [0,0,0,1,1], 'E': [0,0,1,0,0],
          'F': [0,0,1,0,1], 'G': [0,0,1,1,0], 'H': [0,0,1,1,1], 'I': [0,1,0,0,0], 'J': [0,1,0,0,0],
          'K': [0,1,0,0,1], 'L': [0,1,0,1,0], 'M': [0,1,0,1,1], 'N': [0,1,1,0,0], 'O': [0,1,1,0,1],
          'P': [0,1,1,1,0], 'Q': [0,1,1,1,1], 'R': [1,0,0,0,0], 'S': [1,0,0,0,1], 'T': [1,0,0,1,0],
          'U': [1,0,0,1,1], 'V': [1,0,0,1,1], 'W': [1,0,1,0,0], 'X': [1,0,1,0,1], 'Y': [1,0,1,1,0], 'Z': [1,0,1,1,1]}  */
// function
function circularBitShiftEncrypt(word, shiftAmount) {
//take string
  let encryptedWord = '';
  //for loop through the word 
  for (let i = 0; i < word.length; i++) {
//getting the unicode with charaCodAt
    let charCode = word.charCodeAt(i);
  //shifting the word
    let shifted = (charCode << shiftAmount) | (charCode >>> (8 - shiftAmount)); // Perform a circular left shift
    //used to make a string out of the ut code
    encryptedWord += String.fromCharCode(shifted);
  }
  return encryptedWord;
}

let word = 'hello'; // 5-letter word
let shiftAmount = 2; // Shift amount for encryption
let encrypted = circularBitShiftEncrypt(word, shiftAmount);
console.log(encrypted); // Output the encrypted word


function circularBitShiftDecrypt(encryptedWord, shiftAmount) {
  let decryptedWord = '';
  for (let i = 0; i < encryptedWord.length; i++) {
    let charCode = encryptedWord.charCodeAt(i);
    let shifted = (charCode >>> shiftAmount) | (charCode << (8 - shiftAmount)); // Perform the inverse of the circular left shift
    decryptedWord += String.fromCharCode(shifted);
  }
  return decryptedWord;
}

let encrypted = 'jgnnq'; // Encrypted 5-letter word
let shiftAmount = 2; // Shift amount used for encryption
let decrypted = circularBitShiftDecrypt(encrypted, shiftAmount);
console.log(decrypted); // Output the decrypted word