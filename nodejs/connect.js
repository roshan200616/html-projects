const mysql = require('mysql2');

const dbConnection = mysql.createConnection({
  host: '192.168.1.134',     // IP address or domain of the MySQL server
  user: 'root',        // MySQL username
  password: 'Root1234@',  // MySQL password
  database: 'school',  // Database name
  port: 3306                  // Default port (can change if needed)
});

dbConnection.connect((err) => {
  if (err) {
    console.error('Connection failed:', err.message);
  } else {
    console.log('Connected to the remote MySQL database!');
  }
});
