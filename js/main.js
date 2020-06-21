var questions = [
  'Hi, i am sammy. What\'s your name ?',
  'Where are you from?',
  'I am from Nigeria and i love going on tours. Do you like touring?  ',
  'Which of them are you adding to bucket list ?',
  ''
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
const link = `
  <a href=" https://hotels.ng/guides/destinations/tourist-attractions-in-nigeria-tourism-at-its-best/" target="_blank"> </a>
`;

const parser = new DOMParser();
const doc = parser.parseFromString(link, "text/html");

output.innerHTML = questions[num];

function showResponse() {
var input = inputBox.value;
if(inputBox.value == "") {
  
}else {
if(num == 0) {
  output.innerHTML = `Hello ${input} : )`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "typing...");
  ++num;
  setTimeout(changeQuestion, 2000);
} else if(num == 1) {
  output.innerHTML = `Nice, ${input} is very cool. I have many girlfriends there yunno.!`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "typing...");
  ++num;
  setTimeout(changeQuestion, 3000);
} else if(num == 2) {
  output.innerHTML = `What is your favorite tourist location? 
  `;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "typing...");
  ++num;
  setTimeout(changeQuestion, 3000);
} else if(num == 3) {
  output.innerHTML = ` ${input}! is cool. Yunno i visited there once.`;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "typing...");
  ++num;
  setTimeout(changeQuestion, 2000);
} else if(num == 4) {
  output.innerHTML = `Sorry human, i'm not that smart yet... :- )  `;
  inputBox.value = "";
  inputBox.setAttribute("placeholder", "typing");
  ++num;
  setTimeout(changeQuestion, 2000);
}
}
}

function changeQuestion() {
inputBox.setAttribute("placeholder", "Say something");
output.innerHTML = questions[num];
if(num == 5 ) {
  inputBox.style.display = "none";
}
}

$(document).on('keypress', function(e) {
if(e.which == 13) {
  showResponse();
}
})

$( "#ans" ).focus();
