var mysql = require('mysql')
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Bharti@1mysql',
    database: 'navgurukul'
});
con.connect(function(err){
    if(err) throw err;
    console.log('Database connected');
});

module.exports = con;