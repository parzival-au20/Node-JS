const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    database : 'node-app',
    password : '2015',
});

module.exports = connection.promise();