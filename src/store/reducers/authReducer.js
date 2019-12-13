import Immutable from 'immutable'

const initState = Immutable.fromJS({
    authError: null
})

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error:', );
            return state.set('authError', action.err.message);
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return state.set('authError', null);
        case 'LOGOUT_ERROR':
            console.log('logout error:', action.err.message);
            return state.set('authError', 'Logout failed');
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state.set('authError', null);
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return state.set('authError', null);
        case 'SIGNUP_ERROR':
            console.log('logout error:', action.err.message);
            return state.set('authError', action.err.message);
        default:
            return state;
    }
}

export default authReducer;