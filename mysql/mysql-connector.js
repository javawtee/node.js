const mysql = require('mysql');
const connection = mysql.createConnection({

  host:'javawtee.cfz4l1yynrhg.us-east-1.rds.amazonaws.com',

  user:'javawtee_mstr',

  password:'84561379Ab',

  database:'javawtee_com'
});

module.exports = {	
	execute: function(sql){
		connection.connect(function(err){
			(err)? console.log(err+'+++++++++//////'):
			console.log('connected');
			
			connection.query(sql, function(err, results){
				if(err)
					throw err;
				console.log(results);
			});
		});
	},
	
	shuttdown: function(){
		console.log('Shutting down connection');
		connection.end();
	}
}