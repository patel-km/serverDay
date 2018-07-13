var http = require("http");

var PORT_ONE= 7000;
var PORT_TWO = 7500;

var nice = ["You are so loved!", "Wow, great smile :)", "You are a ray of sunshine", "What a pure soul you have", "Thanks for being so kind <3"];
var mean = ["Y u so mean...", "I guess you're having a bad day", "Looks like trouble :(", "You're not yourself when you're hungry",];

var nicePhrase = nice[Math.floor(Math.random() * nice.length)];
var meanPhrase = mean[Math.floor(Math.random() * mean.length)];

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);


// Handles the request of the listener.
function handleRequestOne(request, response) {
  response.end(nicePhrase);
}

function handleRequestTwo(request, response) {
  response.end(meanPhrase);
}


// Listens to the port.
serverOne.listen(PORT_ONE, function() {
  console.log("listening on port 1");
});

serverTwo.listen(PORT_TWO, function() {
  console.log("listening on port 2");
});

