import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequatur officia dolorum doloribus placeat. Dolorem amet, inventore blanditiis cum omnis neque ullam ad quia deleniti, veniam vel, minima laborum nemo?</p>
                </div>
                <div className="card action grey lighten-4 grey-text">
                    <div>Posted by The Net Ninja</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    );
}

export default ProjectDetails;