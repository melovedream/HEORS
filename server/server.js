const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

//查询
const router=require('./router.js')
app.use(router)

//删除
// app.get('/api/delhero',(req,res)=>{
//     const sql='delete from heros where id=?'
//     conn.query(sql,req.query.id,(err,result)=>{
//     if(err) return res.json({err_code:1,message:'删除失败',affectedRows:0})
//     if(result.affectedRows!==1) return res.json({err_code:1,message:'你需要删除的数据不存在',affectedRows:0})
//     res.json({
//         err_code:0,message:'删除成功',affectedRows:result.affectedRows
//     })
//     })   
//     })

app.listen(5000, () => {
    console.log('http://127.0.0.1:5000')
})