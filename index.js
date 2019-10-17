const express = require("express")
const path = require('path')
const PORT = process.env.PORT || 8080

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .get('/:file', (req, res) => {
    const { file } = req.params
    res.sendFile(file, {
      root: 'views'
    })
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))