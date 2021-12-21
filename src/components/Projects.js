import React from 'react';
import '../App.css';

function Projects(props) {
    const {projects} = props;
    return (
        <div className="portfolio">
            {projects.map((project, i) => (
                <img key={i} src={project.img} alt={project.category} />
            ))}
        </div>
    );
}

export default Projects