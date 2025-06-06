const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const mysql = require("mysql2");
const dbConnection = mysql.createConnection({
  host: '103.208.228.191',
  user: 'root',
  password: 'Root1234@',
  database: 'school',
  port : '3000'
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
dbConnection.connect((err) => {
  if (err) {
    console.log(err.message);
  } else {
    initSQl()
    app.listen(3000, (err) => {
      if (err) {
        console.log(err)
      } else {
        console.log('Server is running at http://localhost:3000');
      }
    });
  }
});
const STUDENT_INSERT = /*sql*/`INSERT INTO detail(name) VALUE(?)`
app.get('/api/students', (req, res) => {
  dbConnection.query(/*sql*/`select * from detail`, (err, students) => {
    if (err) {
      res.status(500).send("server error")
    }
    res.status(200).send(students)
  })
})
app.get('/api/student/:studentId/', (req, res) => {
  const studentId = req.params.studentId
  dbConnection.query(/*sql*/`SELECT * FROM detail WHERE id = ?`, [studentId], (err, student) => {
    if (err) {
      res.status(500).send("server error")
    }
    else {
      if (student.length === 0) {
        return res.status(404).send(" 404 Not found")
      }
      else {
        res.status(200).send(student)
      }
    }
  })
})
app.post('/api/student/', (req, res) => {
  const data = req.body;
  dbConnection.query(STUDENT_INSERT, [data.name], (err, insertResult) => {
    if (err) {
      res.status(500).send("server error")
    }
    res.status(204).send(data);
  })
})
app.put('/api/student/:studentId', (req, res) => {
  const studentId = req.params.studentId
  const data = req.body
  dbConnection.query(/*sql*/`UPDATE detail SET name = ? WHERE  id = ?`, [data.name, studentId], (err, updateID) => {
    if (err) {
      res.status(500).send("server error")
    }
    else {
      if (updateID.changedRows === 0) {
        return res.status(404).send('not found the id')
      }
      else {
        return res.status(204).send()
      }
    }
  })
})
app.delete('/api/student/:studentId', (req, res) => {
  const deleteId = req.params.studentId
  const data = req.body
  dbConnection.query(/*sql*/`DELETE FROM detail where id = ?`, [deleteId], (err, results) => {
    if (err) {
      res.status(500).send("server error")
    }
    else {
      if (updateID.changedRows === 0) {
        return res.status(404).send('not found the id')
      }
      else {
        return res.status(204).send()
      }
    }
  })
})
function initSQl() {
  const table = /*sql*/ `
    CREATE TABLE IF NOT EXISTS detail (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255)
    );
  `;
  dbConnection.query(table, (err, results) => {
    if (err) {
      console.log(err.message);
      return;
    }
  })
}
