// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests. NOT the same port you use to make a database.
var PORT_ONE= 7000;
var PORT_TWO = 7500;

// Create a generic walmart greeter function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL. Reply from walmart greeter.
  response.end("It Works!! Path Hit: " + request.url);
}



// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var serverOne = http.createServer(handleRequest);
var serverTwo = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORT_ONE, function() {

  // Log (server-side) when our server has started
  console.log("You are so loved!");
});

serverTwo.listen(PORT_TWO, function() {

  console.log("Y u so mean...");
});

