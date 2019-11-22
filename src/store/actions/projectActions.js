import firebase from '../../config/fbConfig'

export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to database
        const firestore = firebase.firestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'eze',
            authorLastName: 'lamar',
            authorId: 12345,
            createAt: new Date(),
        }).then(() => { dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
}