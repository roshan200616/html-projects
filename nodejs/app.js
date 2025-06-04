const express = require('express')
const app = express()

const studentRouter = require('./routes/student')

app.use('/', studentRouter)


app.listen(3000, (err) => {
  if(err) throw err;
  
  console.log('The app is listening on 3000')
})