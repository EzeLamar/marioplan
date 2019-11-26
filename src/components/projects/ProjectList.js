import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProyectList = ({projects}) => {
    
    const content = projects && projects.map( project => {
        console.log('proyectList',project)
        return (
            <Link to={'/project/' + project.id } key={project.id}>
                <ProjectSummary  project={project} />
            </Link>
        );
    });
    return  (
        <div className="proyect-list section">
            {content}
        </div>
    );
}
//prueba de master

export default ProyectList;