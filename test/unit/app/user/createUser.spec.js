const makeCreateUser = require('../../../../src/app/user/createUser')

describe('createUser', () => {
    //vamos reasing
    let createUser
    //cria um cenario
    // para quem esta fora nao sabe se ele vai inserir ou o que vai
    describe('when user is not valid', () => {
        it('calls onInValidUser callback', async () => {
            createUser = makeCreateUser({})
            const spy = jest.fn()
            await createUser({user:'Ciclana',age:17},{
                onInValidUser(validationError) {
                    spy()
                    expect(validationError.age).toBeTruthy()
                }
            })
            expect(spy).toHaveBeenCalled()
        })
    })
    describe('everything is perfect', () => {
        it('calls onSuccess callback', async () => {
            const mockUserRepository = {
                async add(user) {
                    return user
                }
            }
            const spy = jest.fn()
            createUser = makeCreateUser({userRepository:mockUserRepository})
            await createUser({name:'Julia',age:19},{
                onSuccess(user) {
                    spy()
                    expect(user).toBeTruthy()
                }
            })
            expect(spy).toHaveBeenCalled()
        })
    })
    //ignorar a existencia de banco, portanto se ele nao foi persistido, independente de onde sera
    describe('when user cant not be persisted', () => {
        it('calls onSuccess callback', async () => {
            const mockUserRepository = {
                async add(user) {
                    throw Error('Boom')
                }
            }
            const spy = jest.fn()
            createUser = makeCreateUser({userRepository:mockUserRepository})
            await createUser({name:'Juliana',age:19},{
                onError(error) {
                    spy()
                    expect(error).toBeTruthy()
                }
            })
            expect(spy).toHaveBeenCalled()
        })
    })
})