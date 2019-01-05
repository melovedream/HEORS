const conn=require('./model.js')
const getheros=(req, res) => {
  const sql = 'select * from heros where isdel=0'
  conn.query(sql, (err, result) => {
      if (err) return res.json({ err_code: 1, message: '查询失败', affectedRows: 0 })
      res.json({
          err_code: 0, message: result, affectedRows: 0
      })
  })
}
const gethero=(req, res) => {
  const id=req.query.id
  const sql = 'select * from heros where id=?'
  conn.query(sql,id, (err, result) => {
      if (err) return res.json({ err_code: 1, message: '查询失败', affectedRows: 0 })
      res.json({
          err_code: 0, message: result, affectedRows: 0
      })
  })
}
const updatehero=(req, res) => {
  const sql = 'update heros set ? where id=?'
  conn.query(sql, [req.body, req.body.id], (err, result) => {
      if (err) return res.json({ err_code: 1, message: '修改失败', affectedRows: 0 })
      if (result.affectedRows !== 1) return res.json({ err_code: 1, message: '未找到你想修改的数据', affectedRows: 0 })
      res.json({ err_code: 0, message: '修改成功', affectedRows: result.affectedRows })
  })
}
const delhero =(req, res) => {
  const id = req.query.id
  const sql = 'update heros set isdel=1 where id=?'
  conn.query(sql, id, (err, result) => {
      if (err) return res.json({ err_code: 1, message: '删除失败', affectedRows: 0 })
      if (result.affectedRows !== 1) return res.json({ err_code: 1, message: '你需要删除的数据不存在', affectedRows: 0 })
      res.json({
          err_code: 0, message: '删除成功', affectedRows: result.affectedRows
      })
  })
}
const moment = require('moment')
const addhero=(req, res) => {
  req.body.ctime = moment().format('YYYY-MM-DD hh-mm-ss')
  const sql = 'insert into heros set ?'
  conn.query(sql, req.body, (err, result) => {
      if (err) return res.json({ err_code: 1, message: '新增失败', affectedRows: 0 })
      res.json({ err_code: 0, message: '添加成功', affectedRows: result.affectedRows })
  })

}
module.exports={
  getheros,
  gethero,
  updatehero,
  delhero,
  addhero
}