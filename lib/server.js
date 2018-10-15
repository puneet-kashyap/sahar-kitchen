const express = require("express");
// const cors = require("cors");

const app = express();
const server = app.listen(3000, () => {
  console.log("listening on Port:3000");
});
const io = require("socket.io").listen(server);

// io.origins(['http://localhost:4200','*'])

app.get("/", function(req, res) {
  res.send("Hello World");
});

io.on("connection", socket => {
  console.log("A user connected: " + socket.client.id);

  socket.on("message", message => {
    console.log("Message Received: " + message);
    io.emit("message", { type: "new-message", text: message });
  });

  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  
});
