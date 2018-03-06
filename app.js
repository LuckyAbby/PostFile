const express = require('express')
const multer  = require('multer')

const app = express()
const upload = multer({ dest: 'upload/' })

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.post('/upload',upload.single('file'), (req, res) => {
  console.log('req body', req.body)
  console.log('req file', req.file)
  if (req.file.fieldname) {
    res.status(200).send({message: 'ok', status: 200, res: {}})
  }
})

app.listen(3036, function () {
  console.log('app is listening at port 3036')
})
