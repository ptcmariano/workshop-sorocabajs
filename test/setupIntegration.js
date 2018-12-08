const models = require('../src/infra/sequelize/models')
beforeEach(async () => {
    //limpa banco antes de cada teste
    await models.sequelize.truncate({cascade:true})
})

afterAll(async () => {
    // desconecta do banco depois de todos os testes rodatem
    await models.sequelize.close()
})