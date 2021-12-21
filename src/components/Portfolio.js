import React, {useState} from 'react';
import Projects from "./Projects";
import Toolbar from "./Toolbar";
import projects from '../data/projects';


function Portfolio() {

        const [activeFilter, setActiveFilter] = useState(null);
        const [activeProjects, setActiveProjects] = useState(projects);
        const categories = Array.from(new Set(projects.map(project => project.category)))
        console.log(activeProjects);
        return(
            <div>
                <Toolbar
                    filters={["All", ...categories]}
                    selected={activeFilter}
                    onSelectFilter={(filter) => {setActiveFilter(filter)}}
                />
                <Projects projects={activeFilter === 'All' ? activeProjects : activeProjects.filter(el => el.category === activeFilter)} />
            </div>
        );
}
export default Portfolio;


