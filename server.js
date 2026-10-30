const path = require('path')
const express = require('express')
const { createServer } = require('http')
const { Server } = require('socket.io')

const app = express()
const server = createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => {
  console.log('Un usuario se conectó')

  socket.on('chat message', (message) => {
    if (!message || typeof message.text !== 'string') return

    const text = message.text.trim().slice(0, 300)
    if (!text) return

    const name = typeof message.name === 'string'
      ? message.name.trim().slice(0, 20) || 'Anónimo'
      : 'Anónimo'

    io.emit('chat message', { name, text })
  })
})

const port = process.env.PORT || 3000
server.listen(port, () => {
  console.log(`Chat listo en el puerto ${port}`)
})
