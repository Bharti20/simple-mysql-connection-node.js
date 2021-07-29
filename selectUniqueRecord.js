const con = require('./connection.js')
let sql = 'SELECT * FROM studentsDetails where id = 1';
con.query(sql, function(err, result) {
    if(err) throw err
    console.log(result)
});