const express = require('express')
const router = express()

router.get('/', (req, res) => {
    res.send('Hello i am get')
})

router.post('/', (req, res) => {
    res.send('Hii i am post method')
})

router.put('/', (req, res) => {
    res.send('Hii i am put method')
})

router.delete('/', (req, res) => {
    res.send('Hii i am delete method')
})

exports.module = router 

