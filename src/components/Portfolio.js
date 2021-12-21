import React, {useState} from 'react';
import Projects from "./Projects";
import Toolbar from "./Toolbar";
import images from '../data/images';


function Portfolio() {

        const [activeFilter, setActiveFilter] = useState(null);
        const [activeImages, setActiveImages] = useState(images);
        const categories = Array.from(new Set(images.map(image => image.category)))

        return(
            <div>
                <Toolbar
                    filters={["All", ...categories]}
                    selected={activeFilter}
                    onSelectFilter={(filter) => {setActiveFilter(filter)}}
                />
                <Projects project={activeImages} />
            </div>
        );
}
export default Portfolio;


