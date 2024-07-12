require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT||4000

const data = {
    "user" : "dummy user",
    "role" : "CEO",
    "salary" : "1000000000$",
    "age" : 20
}

app.get('/',(req,res) => {
    res.send("hello world")
})

app.get('/twitter',(req,res) => {
    res.send("one of the social media plattform")
})

app.get('/youtube',(req,res) => {
    res.send(`<h1>using this to learn the backend</h1>`)
})
app.get('/linkedin',(req,res) => {
    res.send(`<h2>very good plattform to know about jobs and proffesional world</h2>`)
})
app.get('/user',(req,res) => {
    res.json(data)
})


app.listen(port,() => {
    console.log(`running on port ${port}`);
})