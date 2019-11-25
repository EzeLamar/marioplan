const initState = {
    projects: [
    ],
}

const projectReducer = (state = initState, action) => {
    let newState;
    switch (action.type) {
        case 'CREATE_PROJECT': {
            newState = {
                ...state,
                projects: [...state.projects, action.project],
            };
            return newState;
        }
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        case 'GET_PROJECTS':
            newState = {
                projects: action.projects,
            }
            return newState;
        case 'GET_PROJECT_ERROR':
                console.log('create project error', action.err);
                return state;
        default:
            return state;
    }
}

export default projectReducer;