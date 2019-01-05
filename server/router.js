const express=require('express')
const conn=require('./model.js')
const router=express.Router()
const {getheros,gethero,updatehero,delhero,addhero}=require('./controller')
router.get('/api/getheros', getheros)
router.get('/api/gethero',gethero)
//修改
router.post('/api/updatehero',updatehero)
//软删除
router.get('/api/delhero', delhero)

//增加
router.post('/api/addhero',addhero )
module.exports=router