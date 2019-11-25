import React from 'react'
import { connect } from 'react-redux'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    const { project } = props;
    let content;
    project ?
        content =
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title} - {id}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card action grey lighten-4 grey-text">
                        <div>Posted by {project.authorLastName}, {project.authorFirstName}</div>
                        <div>{project.createAt.seconds}</div>
                    </div>
                </div>
            </div> :
        content =
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Nada que mostrar</span>
                    </div>
                </div>
            </div>
    return content;
}

const mapStateToProps = (state, ownProps) => {
    console.log('state',state);
    const id = ownProps.match.params.id;
    const projects = state.project.projects;
    console.log('projects',projects);
    const project  = projects&&projects.find(project => project.id === id);
    return {
        project
    }
}

export default connect(mapStateToProps)(ProjectDetails);