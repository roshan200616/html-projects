const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',      // your MySQL server host
    user: 'root',           // your MySQL username
    password: 'ROOT!@#$@', // your MySQL password
    database: 'school'  // your database name
});

// Connect to MySQL server
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('Connected to MySQL database');
});
const user = { name: 'vel', password: 'sqqew', Tshirt: 'small', interests: 'travel,videogames', phone: '7192108972', percentage: 67.56, passout: 2023 }
const select ='select * from studentdata'
const insert = 'insert into studentdata(name,password,Tshirt,interests,phone,percentage,passout) values(?,?,?,?,?,?,?)'
const del = 'delete from studentdata where Rollno in (?)'
const alter = 'alter table studentdata auto_increment = 7'
const update = 'update studentdata set name = (?) where Rollno =(?) '
// connection.query(del,[18],(err,results)=>{
//     if(err){
//            console.error('Query error:', err.message)
//     }
//     console.log(results)
// })
// connection.query(update,['rajaram',6],(err,results)=>{
//     if(err){
//         console.log(err.message)
//     }
// })
connection.query(insert,[user.name,user.password,user.Tshirt,user.interests,user.phone,user.percentage,user.passout],(err)=>
{
    if(err){
        console.log(err.message)
    }
})
// connection.query(alter,(err,results)=>{
//     if(err){
//         console.log(err.message)
//     }
//     console.log('alter is worked',results)
// })
connection.query(select, (err, results) => {
    if (err) {
        console.log("error", err.message)
    }
    console.log('Current time from MySQL:', results.at(-1));
})


connection.end();
