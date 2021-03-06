const { stdout } = require("process");

let connection;

const setupInput = function (conn) {  
  const stdin = process.stdin;
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };

  if (key === 'i') {
    connection.write("Say: FREE SHREK");
  };
  if (key === 'w') {
    connection.write("Move: up");
  };
  if (key === 'a') {
    connection.write("Move: left");
  };
  if (key === 's') {
    connection.write("Move: down");
  };
  if (key === 'd') {
    connection.write("Move: right");
  };
};

module.exports = {setupInput};