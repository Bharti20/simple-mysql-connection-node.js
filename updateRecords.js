const con = require('./connection.js')
var sql = 'update studentsDetails set name = "Nikita" where id = 1';
con.query(sql,function(err,result) {
    if(err) throw err
    console.log(result)
})