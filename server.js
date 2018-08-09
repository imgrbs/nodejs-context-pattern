const server = require('express')()

const PROJECT_NAME = process.env.PROJECT_NAME || 'NODE.JS'
const PORT = process.env.PORT || 3002

const ROUTES_V1 = require('./src/Routes')
server.use('/api/v1', ROUTES_V1)

server.listen(PORT, (err) => {
  if (err) throw err
  console.log(` ${PROJECT_NAME} READY ON http://localhost:${PORT}`)
})
