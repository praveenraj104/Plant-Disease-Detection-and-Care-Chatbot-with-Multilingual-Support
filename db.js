const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',             // Username from your MySQL Workbench
  password: 'masspraveen08#', // Replace with your MySQL root password
  database: 'plant_disease_db' // Your database name
});

// Open the connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the MySQL database');
  }
});

// Example query to get all users from the 'users' table
connection.query('SELECT * FROM users', (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
  } else {
    console.log('Users:', results);
  }
});

// Close the connection
connection.end();
