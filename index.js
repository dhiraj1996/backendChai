console.log('Dhirak is learning backend');

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/login", (req, res) => {
    res.send("<h1>Login Form</h1>")
})

app.get('/contact', (req, res)=> {
    res.send("<h1>Contact Form</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})