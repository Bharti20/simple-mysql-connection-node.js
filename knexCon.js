const knex = require('knex')({
    client: 'mysql',
    connection: {
        user: 'root',
        host: 'localhost',
        password: 'Bharti@1234',
        database: 'navgurukul'
    }
})
knex.raw("SELECT VERSION()").then((version) => {
    console.log(version)
}).catch((err) => {
    console.log(err)
});