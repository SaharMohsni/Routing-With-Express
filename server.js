const express = require('express')
const hbs = require('hbs')
const app = express()
app.set('view engine', hbs)
var d = new Date();
var hours = d.getHours();
const checkTime = () =>
    (hours>17 && hours <8) ? false : true

    app.use(isOpen=(req,res,next) =>{
    checkTime? next() : res.sendFile(__dirname+'/public/error.html')
     
})
    app.use(express.static(__dirname+'/public'))

app.listen(3000,(err)=>{
    if(err) console.log('server is not  running')
    else console.log('server is running on port 3000 !')
})