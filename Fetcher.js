var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '****',
  port     : '3307',
  database : 'nodejs'
});
 
connection.connect();
 
connection.query('SELECT * from nodejs', function(err, rows, fields) {
  if (err) throw err;
	  
  console.log(rows);
});
 
connection.end();