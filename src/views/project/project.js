import React from 'react';


import ProjectImage from "../../components/project/project-image";
import ProjectContent from "../../components/project/project-content";

export default function Project() {
    return(
        <div className="container">
            <ProjectImage />
            <ProjectContent />  
        </div>
    );
}