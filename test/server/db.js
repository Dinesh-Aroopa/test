const {Pool} = require("pg");


const pool = new Pool({
    user: "postgres",
    password: "1234",
    host:"localhost",
    port: 5432,
    database:"test_db"
});

pool.connect();
// pool.query(`select * from customer`, (err, res) =>{
//     return console.log(res)
// })
module.exports = pool;