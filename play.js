const net = require("net");
const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

setupInput(connect());

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };
};