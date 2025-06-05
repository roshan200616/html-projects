const mysql = require("mysql2");
const connecting = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ROOT!@#$@',
    database: 'school'
});

connecting.connect((err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('connected to database');
    }
});

const table = /*sql*/`create table if not exists 
    detail(
        id int auto_increment primary key, name varchar(255))`
connecting.query(table, (err, results) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Table ready");
    const insert = /*sql*/`insert into detail(name) value("gani")`;
    const update = 'update detail set name = ? where id = ?';

    connecting.query(insert, (err, insertResult) => {
        if (err) {
            console.log(err.message);
            return;
        }
        const insertedId = insertResult.insertId;
        console.log("Insert complete", insertResult);
        connecting.query(`select * from detail where id = ${insertedId}`, (err, select) => {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log("Before update:", select);
            connecting.query(update, ['tamil', insertedId], (err, updateResult) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log('Update complete:', updateResult);
                connecting.query(`select * from detail where id = ${insertedId}`, (err, selectAfterupdate) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                    console.log("After update:", selectAfterupdate);
                    connecting.query(`delete from detail where id =${insertedId}`, (err, deleteresult) => {
                        if (err) {
                            console.log(err.message)
                        }
                        console.log('deleted complete', deleteresult)
                        connecting.query(`select * from detail where id = ${insertedId}`, (err, selectAfterdelete) => {
                            if (err) {
                                console.log(err.message);

                                return;
                            }
                            console.log("After update:", selectAfterdelete);
                        })
                        connecting.end();
                    });
                });
            });
        });
    })

});

