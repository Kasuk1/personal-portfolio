import Project1_1 from "../../assets/images/project1.1.jpg"
import Project1_2 from "../../assets/images/project1.2.jpg"
import Project1_3 from "../../assets/images/project1.3.jpg"
import Project1_4 from "../../assets/images/project1.4.jpg"

import "./project-image.scss"

export default function ProjectImage() {
    return(
        <section className="border-project-image animate__animated animate__fadeInLeft">
            <div className="project-image">
                <img src={Project1_1} alt="Index Main Blog" />
                <img src={Project1_2} alt="Article Solo" />
                <img src={Project1_3} alt="Share Feature" />
                <img src={Project1_4} alt="Category Blog" />
            </div>
        </section>
    );
}

