const { Router } = require('express')
const router = ({ usersController}) => {
    // para injecao de dependencia criamos funcao
    const appRouter = Router()
    appRouter.post('/users', usersController.create)
    return appRouter
}
module.exports = router