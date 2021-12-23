import React from 'react';
import { shortid } from 'shortid';

import '../App.css';

function Projects(props) {
    const {projects} = props;
    return projects.map((project) => {
        return (
            <div className="portfolio">
                <img key={shortid.generate()} src={project.img} alt={project.category} />
            </div>
        );
    });
}

export default Projects