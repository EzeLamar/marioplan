import React from 'react'
import ProjectSummary from './ProjectSummary'

const ProyectList = ({projects}) => {
    const content = projects && projects.map( project => {
        return (<ProjectSummary key={project.id} project={project} />);
    });
    return  (
        <div className="proyect-list section">
            {content}
        </div>
    );
}

export default ProyectList;