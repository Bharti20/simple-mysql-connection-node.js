const con = require('./connection.js')
let sql = 'SELECT * FROM studentsDetails';
con.query(sql, function(err, result) {
    if(err) throw err
    console.log(result)
});