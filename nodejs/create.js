const mysql = require("mysql2");
const connecting = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Root1234@',
    database: 'school'
});

connecting.connect((err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('connected to database');
    }
});

const table = 'CREATE TABLE IF NOT EXISTS detail(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))';
connecting.query(table, (err, results) => {
    if (err) {
        console.log(err.message);
        return;
    }
    console.log("Table ready");
});

const insert = 'insert into detail(name) value("tamil")';
const update = 'UPDATE detail SET name = ? WHERE id = ?';

connecting.query(insert, (err, insertResult) => {
    if (err) {
        console.log(err.message);
        return;
    }
    const insertedId = insertResult.insertId;
    console.log("Insert complete", insertResult);
    connecting.query(`SELECT * FROM detail WHERE id = ${insertedId}`, (err, select) => {
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
            connecting.query(`SELECT * FROM detail WHERE id = ${insertedId}`, (err, selectAfterupdate) => {
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
                    connecting.query(`SELECT * FROM detail WHERE id = ${insertedId}`, (err, selectAfterdelete) => {
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
