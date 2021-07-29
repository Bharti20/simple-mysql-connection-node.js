const connection = require('./connection.js')
var sql = 'insert into studentsDetails(id, name, age) values(2 ,"sarmi", 13), (3,"pragati", 14)';
connection.query(sql, function(err, result) {
    if(err) throw err
    console.log('1 record inserted')
});
