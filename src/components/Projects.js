import React from 'react';
import '../App.css';

function Projects(props) {
    const {project} = props;
    return (
        <div className="images">
            {project.map((prj, i) => (
                <img key={i} src={prj.img} alt={prj.category} />
            ))}
        </div>
    );
}

export default Projects