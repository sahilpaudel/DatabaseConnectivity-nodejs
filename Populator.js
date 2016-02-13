var mysql = require("mysql"); //import the mysql module

var pool = mysql.createPool({
	
	host : 'localhost',
	user : 'root',
	password: '****',
	port : '3307', //usually it is 3306
	database : 'nodejs' //your database name
});

//Establishing the node-mysql connection
pool.getConnection(function(err, connection){
	//Query
	connection.query("insert into nodejs values('nodejs');", function(err, rows){
		
		if(err){
			//OnError
			throw err;
		}else{
			console.log(rows);
		}
	});
	console.log("Done");
	connection.release();
});