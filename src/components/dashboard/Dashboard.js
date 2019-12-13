import React,{ Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

//import {  getProjects } from '../../store/actions/projectActions'
import { firestoreConnect } from 'react-redux-firebase'

class Dashboard extends Component {
    render (){
        let content;
        const { projects, auth } = this.props;
        projects ?
        content =
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        {!auth.isEmpty ? <ProjectList projects={projects}/> : null}
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>:
        content =
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <h1>Loading...</h1>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        if (!auth.uid) return  <Redirect to='/signin' />

        return content;
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        projects: state.firestore.ordered.projects,
    }
}

export default compose(
    firestoreConnect(['projects']),
    connect(mapStateToProps)
)(Dashboard);