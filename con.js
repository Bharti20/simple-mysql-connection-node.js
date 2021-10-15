const mysql = require('mysql')
const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Bharti@1234',
    database: 'navgurukul'
})
con.connect((err) => {
    if(err) throw err;
    console.log('database connected')
    con.query('select * from studentsDetails', (err, result) => {
        if(err) throw err;
        console.log(result)
    });

});