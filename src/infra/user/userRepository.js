const User = require('../../domain/user/User')
// a interface userRepository fica no dominio a implementacao fica na infra
const userRepository = ({ sequelizeModels }) => ({
    async add(user){
        const databaseUser = this._toDatabase(user)
        const newDatabaseUser = await sequelizeModels.user.create(databaseUser)
        const newUser = this._fromDatabase(newDatabaseUser)
        return newUser;
    },
    async size() {
        return sequelizeModels.user.count()
    },
    // para o padrao repository temos um mapper para transferir do dominio para como o banco entende
    _toDatabase(user) {
        return {
            name: user.name,
            age: user.age
        }
    },
    _fromDatabase(databaseUser) {
        return new User({
            id: databaseUser.id,
            name: databaseUser.name,
            age: databaseUser.age
        })
    }
})
module.exports = userRepository