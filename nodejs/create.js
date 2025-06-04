const mysql = require("mysql2")
const connecting = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'ROOT!@#$@',
        database: 'school'
    }
)
connecting.connect((err) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log('connected to database')
    }
})
// const table = 'create table detail(id int auto_increment primary key,name varchar(255))'
// connecting.query(table,(err,results)=>{
//     if(err){
//         console.log(err.message)
//         return
//     }
//     console.log(results)
// })
const value = [['gani'], ['praveen'], ['savari']]
const insert = 'insert into detail(name) values ("muruga")'
const select = 'select * from detail'
const alter = 'alter table detail auto_increment = 0'
// connecting.query(alter,(err,result)=>{
//     if(err){
//         console.log(err.message)
//     }
//     console.log("alter is worked")
// })
connecting.query(insert,(err,result)=>{
    if(err){
        console.log(err.message)
        return
    }
    console.log("insert complete")
    console.log(result)
    connecting.query(`select * from detail where id = ${result.insertId}`, (err, result) => {
        if (err) {
            console.log(err.message)
        }
        console.log(result)
        connecting.end()

    })
})

// connecting.query(select, (err, result) => {
//     if (err) {
//         console.log(err.message)
//     }
//     console.log(result.at(-1))
// })

