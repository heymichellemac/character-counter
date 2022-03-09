const countTextArea = document.getElementById('character-text');
const countCharacterVlaue = document.getElementById('character-count');
const generateCharacters = document.getElementById('generate-characters');
const charactersToGenerate = document.getElementById('characters-to-generate');
const generatedCharacters = document.getElementById('generated-characters');
const resetFields = document.getElementById('reset-button');
const generate = document.getElementById('generate-ipsum');
const length = document.getElementById('words-to-generate');
const ipsumResult = document.getElementById('generated-ipsum');

const copyCharacterCounter = document.getElementById('copy-button');
const copyCharacterGenerator = document.getElementById('copy-button2');
const copyLoremIpsum = document.getElementById('copy-button3');

resetFields.onclick = () => {
  countTextArea.value = '';
  countCharacterVlaue.innerHTML = '0';
  generatedCharacters.innerHTML = '';
  ipsumResult.innerHTML = '';
  charactersToGenerate.value = '50';
  length.value = '50';
}

countTextArea.oninput = () => {
  let characters = countTextArea.value;
  countCharacterVlaue.textContent = characters.length;
}

copyCharacterCounter.onclick = () => {
    /* Copy the text inside the text field */
   navigator.clipboard.writeText(countTextArea.value);
   /* Alert the copied text */
   alert("Text copied successfully");
}

copyCharacterGenerator.onclick = () => {
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(generatedCharacters.value);
  /* Alert the copied text */
  alert("Text copied successfully");
}

copyLoremIpsum.onclick = () => {
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(ipsumResult.value);
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

var generateLoremIpsum = function(len) {
  var words = ['lorem','ipsum','dolor','sit','amet','consectetur', 'adipiscing', 'elit','curabitur',
 'vel','hendrerit','libero','eleifend','blandit','nunc','ornare','odio','ut','orci','gravida','imperdiet','nullam','purus','lacinia','a','pretium',
 'quis','congue','praesent','sagittis','laoreet','auctor','mauris','non','velit','eros','dictum','proin','accumsan','sapien','nec','massa','volutpat','venenatis','sed','eu','molestie','lacus','quisque','porttitor','ligula','dui','mollis','tempus','at','magna','vestibulum','turpis',
 'ac','diam','tincidunt', 'id','condimentum','enim','sodales','in','hac','habitasse','platea','dictumst','aenean','neque',
 'fusce','augue','leo','eget','semper','mattis','tortor','scelerisque','nulla','interdum','tellus','malesuada','rhoncus',
 'porta','sem','aliquet','et','nam','suspendisse','potenti','vivamus','luctus','fringilla','erat','donec','justo','vehicula',
 'ultricies','varius','ante','primis','faucibus','ultrices','posuere','cubilia','curae','etiam',
 'cursus','aliquam','quam','dapibus','nisl','feugiat','egestas','class','aptent','taciti','sociosqu','ad',
 'litora','torquent','per','conubia','nostra','inceptos','himenaeos', 'phasellus','nibh','pulvinar','vitae','urna','iaculis','lobortis','nisi','viverra','arcu',
 'morbi','pellentesque','metus','commodo','ut','facilisis','felis','tristique','ullamcorper','placerat','aenean','convallis','sollicitudin','integer','rutrum',
 'duis','est','etiam','bibendum','donec','pharetra','vulputate','maecenas', 'mi','fermentum','consequat','suscipit', 'aliquam','habitant','senectus',
 'netus','fames','quisque','euismod','curabitur','lectus','elementum','tempor','risus','cras'];

  var wordCount = (len > words.length) ? (words.length - 1) : len;
  var extracted = [];

  for (var i = 0; i < wordCount; i++) {
      var word = Math.floor(Math.random() * words.length);
      extracted[i] = words[word];
  }
  return extracted.join(' ');
};

generate.onclick = () => {
  var len = length.value;
  var text = generateLoremIpsum(len);
  ipsumResult.innerHTML = text;
}
