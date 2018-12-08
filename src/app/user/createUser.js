const User = require('../../domain/user/User')
// caso de uso
// criar os testes deve ser tão facil quanto a controller
// e nesse caso de uso de deve fica dentro dele as coisas
const createUser = ({userRepository}) => {
    // usando funcao para evitar boilerplate
    return async function (userData, {
        onSuccess,
        onInValidUser,
        onError
    }) {
        const user = new User(userData)
        const validation = user.validate();
        if (!validation.isValid) {
            return onInValidUser(validation.error);
        }
        try {
            const newUser = await userRepository.add(user)
            return onSuccess(newUser)
        } catch (error) {
            return onError(error)
        }
    }
}
// exporta uma funcao que cria o usuario, padrao factory
module.exports = createUser