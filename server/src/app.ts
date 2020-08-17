import express from 'express'
class App {
  express: express.Application

  constructor() {
    this.express = express()
  }
}

export default new App().express
