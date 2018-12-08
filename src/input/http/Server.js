const express = require('express')
const bodyParser = require('body-parser')

class Server {
    constructor({ router }) { // dependency injection
        this.express = express()
        this.express.use(bodyParser.json())
        this.express.use('/api', router)
    }

    start() {
        // quando da start no express, vem de funcao antiga que vem call back ... vamos manter promisse
        return new Promise((resolve) => {
            this.express.listen(3000, () => {
                console.log('Listen http on port 3000')
                resolve()
            })
        })
    }
}

module.exports = Server