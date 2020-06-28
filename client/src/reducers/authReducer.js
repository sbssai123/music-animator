export const authReducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_ACCESS_TOKEN":
            return {
                ...state,
                token: action.token
            };
        case "SET_LOGIN_URL":
            return {
                ...state,
                loginUrl: action.loginUrl
            };
        default:
            return state
    }
}

export default authReducer;