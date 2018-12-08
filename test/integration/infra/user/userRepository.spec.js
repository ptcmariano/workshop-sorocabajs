const makeUserRepository = require('../../../../src/infra/user/userRepository')
const models = require('../../../../src/infra/sequelize/models')
const User = require('../../../../src/domain/user/User')

describe('userRepository', () => {
    let userRepository;
    beforeAll( () => {
        userRepository = makeUserRepository({
            sequelizeModels: models
        })
    })

    describe('#add', () => {
        it('adds a user to database', async () => {
            const user = new User({
                name: 'Novo',
                age: 26
            })

            const newUser = await userRepository.add(user)

            expect(newUser.id).toBeTruthy()
        })
    })
})