const con = require('./connection.js')
var sql = 'create table studentsDetails(id int, name varchar(255), age int)';
con.query(sql,function(err, result) {
    if(err) throw err;
    console.log('Table created')
});


