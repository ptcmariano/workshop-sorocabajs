const awilix = require('awilix')
const { asClass, asFunction, asValue } = awilix
const container = awilix.createContainer()
const Server = require('./input/http/Server')
const router = require('./input/http/router')
const usersController = require('./input/http/users/usersController')
// camada de entrada
container.register({
    server: asClass(Server),
    router: asFunction(router),
    usersController: asFunction(usersController)
})
// camada application
const createUser = require('./app/user/createUser')
container.register({
    createUser: asFunction(createUser)
})
// infra layer
const userRepository = require('./infra/user/userRepository')
const sequelizeModels = require('./infra/sequelize/models')

container.register({
    sequelizeModels: asValue(sequelizeModels),
    userRepository: asFunction(userRepository)
});

module.exports = container