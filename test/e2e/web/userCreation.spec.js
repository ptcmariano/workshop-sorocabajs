const request = require('../../suport/request')
describe('userCreation', () => {
    describe('when user JSON is valid', () => {
        it('return the persisted user', async () => {
            const response = await request()
                .post('/api/users')
                .send({
                    user:{
                        name: 'web',
                        age: 44
                    }
                })

            const user = response.body

            expect(user.id).toBeTruthy()
            expect(user.name).toEqual('web');
            expect(user.age).toEqual(44);
        })
        it('return status 201', async () => {
            await request()
                .post('/api/users')
                .send({
                    user:{
                        name: 'web',
                        age: 44
                    }
                })
                .expect(201)
        })
    })
})