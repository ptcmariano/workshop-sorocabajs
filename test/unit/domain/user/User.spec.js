const User = require('../../../../src/domain/user/User')
describe('User', () => {
    describe('when name is present and age is > 18', () => {
        it('is valid', () => {
            //setup
            const user = new User({name:'Fulano',age:19})
            //execute
            const validation = user.validate()
            //assert
            expect(validation.isValid).toBe(true)
        })
    })
    describe('when name is not present', () => {
        it('is invalid', () => {
            //setup
            const user = new User({age:19})
            //execute
            const validation = user.validate()
            //assert
            expect(validation.isValid).toBe(false)
        })
    })
})