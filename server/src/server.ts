import app from './app'

import socketIo from 'socket.io'

const server = require('http').createServer(app)
const io = socketIo(server)

interface Message {
  username: string
  message: string
}

let messages: Message[]

io.on('connection', (socket) => {
  socket.on('sendMessage', (data: Message) => {
    messages.push(data)
  })
})

server.listen(3333)
