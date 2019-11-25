import firebase from '../../config/fbConfig'

export const createProject = (data) => {
    return (dispatch, getState) => {
        // make async call to database
        const project = {
            ...data,
            authorFirstName: 'eze',
            authorLastName: 'lamar',
            authorId: 12345,
            createAt: new Date(),
        }
        const firestore = firebase.firestore();
        firestore.collection('projects').add(
            project,
        ).then(() => { dispatch({type: 'CREATE_PROJECT', project});
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
    }
}

export const getProjects = () => {
    return (dispatch, getState) => {
        // make async call to database
        const firestore = firebase.firestore();
        firestore.collection('projects').get()
        .then(querySnapshot => {
            const projects = querySnapshot.docs.map(doc => doc.data());
            console.log("obtenidos de DB", projects);
            dispatch({type: 'GET_PROJECTS', projects});
        }).catch((err) => {
            dispatch({ type: 'GET_PROJECT_ERROR', err });
        })
    }
}