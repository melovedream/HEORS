const express=require('express')
const path=require('path')
const app=express()
app.use('/node_modules',express.static('../node_modules'))
app.use(express.static(path.join(__dirname,'./views')))
app.listen(4000,()=>{
    console.log('http://127.0.0.1:4000')
})