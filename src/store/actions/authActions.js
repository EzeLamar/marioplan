import firebase from '../../config/fbConfig'

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        firebase.login(credentials).then( () => {
            dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
}

export const signOut = () => {
    return (dispatch, getState) => {
        firebase.logout().then( () => {
            dispatch({ type: 'LOGOUT_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'LOGOUT_ERROR', err });
        });
    }
}

export const signUp = ({email, password, username}) => {
    return (dispatch, getState) => {
        firebase.createUser({email, password}, {username, email}).then( () => {
            dispatch({ type: 'SINGUP_SUCCESS' });
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err });
        });
    }
}
