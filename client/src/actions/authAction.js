export const setAccessToken = (token) => {
    return {
        type: 'SET_ACCESS_TOKEN',
        token
    }
}

export const setLoginUrl = (loginUrl) => {
    return {
        type: 'SET_LOGIN_URL',
        loginUrl
    }
}

export const login = () => {
    return dispatch => {
        fetch('/oauth/login').then(res => {
            return res.json()
        }).then(res => {
            dispatch(setLoginUrl(res.url))
        }).catch(error => console.warn(error))
    }
}