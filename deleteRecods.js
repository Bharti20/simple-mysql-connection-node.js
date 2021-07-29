const con = require('./connection.js')
let sql = 'DELETE FROM studentsDetails WHERE name = "pragati"';
con.query(sql, function(err, result) {
    if(err) throw err
    console.log('Deleted a record')
});