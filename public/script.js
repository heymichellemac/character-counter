
const countTextArea = document.getElementById('character-text');
const countCharacterVlaue = document.getElementById('character-count');
const copyToClipboard = document.getElementById('copy-button');
const copyToClipboard2 = document.getElementById('copy-button2');
const generateCharacters = document.getElementById('generate-characters');
const charactersToGenerate = document.getElementById('characters-to-generate');
const generatedCharacters = document.getElementById('generated-characters');
const resetFields = document.getElementById('reset-button');

resetFields.onclick = () => {
  countTextArea.value = '';
  generatedCharacters.value = '';
}

countTextArea.oninput = () => {
  let characters = countTextArea.value;
  countCharacterVlaue.textContent = characters.length;
}

copyToClipboard.onclick = () => {
     /* Select the text field */
   countTextArea.select();
   countTextArea.setSelectionRange(0, 99999); /* For mobile devices */
 
    /* Copy the text inside the text field */
   navigator.clipboard.writeText(countTextArea.value);
 
   /* Alert the copied text */
   alert("Text copied successfully");
}

copyToClipboard2.onclick = () => {
  /* Select the text field */
  generatedCharacters.select();
  generatedCharacters.setSelectionRange(0, 99999); /* For mobile devices */

 /* Copy the text inside the text field */
navigator.clipboard.writeText(generatedCharacters.value);

/* Alert the copied text */
alert("Text copied successfully");
}

generateCharacters.onclick = () => {
  console.log(charactersToGenerate.value);
  var randomValues = '';
  var stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';
  var sizeOfCharacter = stringValues.length;
  for (var i = 0; i < charactersToGenerate.value; i++) {
    randomValues = randomValues+stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
  }
  console.log(randomValues);
  generatedCharacters.textContent = randomValues;
}

function generateRandomNumber(numberOfCharacters) {
  var randomValues = '';
  var stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';  
  var sizeOfCharacter = stringValues.length;  
  for (var i = 0; i < numberOfCharacters; i++) {
     randomValues = randomValues+stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
  }
  return randomValues;
} 
console.log(generateRandomNumber(6));
