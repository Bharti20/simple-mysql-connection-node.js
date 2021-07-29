const con = require('./connection.js')

con.query('create database if not exists navgurukul', function(err, result){
    if(err) throw err
    console.log('Database created')
});



