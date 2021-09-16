import * as Types from './Types';

export const login = (id) => {
    return {
        type: Types.LOGIN,
        id
    }
}
export const logout = () => {
    return {
        type: Types.LOGOUT
    }
}
export const getUsers = (users) => {
    return {
        type: Types.GET_USERS,
        users
    }
}
export const getQuestions = (questions) => {
    return {
        type: Types.GET_QUESTIONS,
        questions
    }
}