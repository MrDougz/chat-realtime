import React, { FormEvent, useState } from 'react'
import io from 'socket.io-client'

import './global.css'

function App() {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')

  let socket = io('http://localhost:3333')

  function handleSubmitMessage(event: FormEvent) {
    event.preventDefault()

    if (username.length && message.length) {
      let messageObject = {
        username,
        message,
      }

      socket.emit('sendMessage', messageObject)
    }
  }

  return (
    <div className="App">
      <form id="chat" onSubmit={handleSubmitMessage}>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Digite um nome de usuário"
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <div className="messages"></div>
        <input
          id="message"
          type="text"
          name="message"
          placeholder="Digite sua mensagem"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
