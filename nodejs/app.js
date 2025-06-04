const express = require('express');
const app = express();

app.get('/api/students', (req, res) => {
  res.send('/api/students');
});
app.get('/api/student/:studentId',(req,res) =>{
  console.log(req.params.studentId)
  console.log(req.query)
  console.log(req.body)
  res.send("/api/student/:id")
})

app.listen(3000, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log('Server is running at http://localhost:3000');
  }
});
