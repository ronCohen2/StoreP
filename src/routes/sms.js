var twilio = require("twilio");

var accountSid = "ACcd57674ec7272b2c0740bca6e3844009"; // Your Account SID from www.twilio.com/console
var authToken = "564d3cf100ece89f12811921b9348a9e"; // Your Auth Token from www.twilio.com/console

var client = new twilio(accountSid, authToken);

client.messages
  .create({
    body: "Hello from Node",
    to: "+972543369400", // Text this number
    from: "+12039413066" // From a valid Twilio number
  })
  .then(message => console.log(message.sid));
  

