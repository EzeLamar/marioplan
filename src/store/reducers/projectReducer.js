import Immutable from 'immutable';

const initState = Immutable.fromJS({
    projects: [
    ],
})

const projectReducer = (state = initState, action) => {
    let newState;
    switch (action.type) {
        case 'CREATE_PROJECT': {
            newState = state.getIn(['projects']).concat(Immutable.fromJS(action.project))
            return newState;
        }
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'GET_PROJECTS':
            newState = state.getIn(['projects']).concat(Immutable.fromJS(action.projects))
            return newState;
        case 'GET_PROJECT_ERROR':
                console.log('create project error', action.err);
                return state;
        default:
            return state;
    }
}

export default projectReducer;