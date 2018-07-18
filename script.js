var eight = document.getElementById("eight");
var answer = document.getElementById("answer");
var button = document.getElementById("button");
var input = document.getElementById("input");

var options = [
  "We're here to serve",
  "We win together",
  "We drive results",
  "We're transparent",
  "We continuously get better",
  "We develop each other"
];

button.addEventListener("click", function(){
  eight.innerText = "";
  // Uniformly generates an integer in [0, 5]
  var num = Math.floor(Math.random() * 6);
  answer.innerText = options[num];
});
