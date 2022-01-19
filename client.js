const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // handle incoming data and console.log to player
  conn.on('data', (data) => {
    console.log(data.toString());
  });

  // "connect" event that is triggered as soon as connection is successful
  conn.on('connect', () => {
    console.log("Successfully connected to the game server");
    // Send string to server upon connection
    conn.write("Name: POG");
  })  

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = connect;