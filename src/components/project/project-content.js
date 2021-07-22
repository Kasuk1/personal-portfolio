import "./project-content.scss"


export default function ProjectContent() {
    return(
        <main className="project-content animate__animated animate__fadeInRight">
            <h1 className="text-highlight" style= {{marginBottom: "-20px"}}>VIVE EN LIBERTAD - GERCETUR</h1>
            <section>
                <h2 className="text-highlight">Description</h2>
                <p>Vive en Libertad is a blog that shows articles in 4 differentes categories: urban, culture, gastronomy and adventure. The objective was to express every aspect of the article through the images, specifically in the layout.</p>
            </section>
            <section>
                <h2 className="text-highlight">Technologies</h2>
                <div className="technologies-list">
                    <ul>
                        <h3>Web Design</h3>
                        <li>Figma</li>
                        <li>Photoshop</li>
                    </ul>
                    <ul>
                        <h3>Front-end</h3>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Sass</li>
                        <li>React.js</li>
                    </ul>
                    <ul>
                        <h3>Back-end</h3>
                        <li>Php</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </section>
            <section>
                <h2 className="text-highlight">References</h2>
                <ul className="reference-list">
                    <li><a href="https://viveenlibertad.pe/" target="_blank" rel="noreferrer">Official Web</a></li>
                    <li><a href="https://github.com/Kasuk1/ViveEnLibertad.git" target="_blank" rel="noreferrer">GitHub</a></li>
                </ul>
            </section>

    </main>
    );
}