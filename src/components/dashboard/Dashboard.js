import React,{ Component } from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import { connect } from 'react-redux'

import {  getProjects } from '../../store/actions/projectActions'

class Dashboard extends Component {

    componentDidMount() {
        //hacer fetch
        this.props.getProjects();
    }

    handleGetProjects = () => {
        this.props.getProjects();
    }

    render (){
        const { projects } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <ProjectList projects={projects}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
                <button onClick={this.handleGetProjects}>obtenerProyectos</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.project.projects,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProjects: () => dispatch(getProjects())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);