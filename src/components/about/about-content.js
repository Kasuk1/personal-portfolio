import "./about-content.scss"

export default function AboutContent() {
    return (
        <section className="about-content-container animate__animated animate__fadeInRight">
            <h1 className="text-highlight">Something about me...</h1>
            <section>
                <h2 className="text-highlight">Education</h2>
                <p>Systems Engineer based in Perú. I started my self-taught web development in 2020, 1 year after my graduation. 
                I got some certifications in diverses online web apps related to Web Development. 
                More info about my education in <a href="https://google.com.pe" target="_blank" rel="noreferrer" className="text-highlight cv">my curriculum vitae</a>.</p>
            </section>
            <section>
                <h2 className="text-highlight">Experience</h2>
                <p>I began writing some basic code like freelance. Most of the pages were static but this experience was enough to decided what 
                I want to dedicate in my life and career.</p>
            </section>
            <section>
                <h2 className="text-highlight">Hobbies</h2>
                <p>I love been active since I have 15 years old and I developed a lot of skills related to physic exercises, diets and ultimately, Crossfit. 
                I’ve a lot to learn but I have all my life for that.</p>
            </section>

            <aside>
                <p className="quote">"I'm just a man that got enough with always dream."</p>
            </aside>
            
        </section>
    );
}