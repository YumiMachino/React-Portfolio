import ProjectCard from "./ProjectCard";
import './Portfolio.css'

const Portfolio = () => {

const projects = [
  {
    id: 1, 
    title: "Project1",
    img: "../img/vancouver.jpg",
    languages: "HTML, CSS, JavaScript",
    projectURL: "https://www.google.com/"
  }, 
   {
    id: 2, 
    title: "Project2",
    img: "../img/vancouver.jpg",
    languages: "HTML, CSS, JavaScript",
    projectURL: "https://www.google.com/"
  }, 
   {
    id: 3, 
    title: "Project3",
    img: "../img/vancouver.jpg",
    languages: "HTML, CSS, JavaScript",
    projectURL: "https://www.google.com/"
  }
]


    return ( 
        <div className="portfolio-section">
          <div className="portfolio_title">
              <h3>PORTFOLIO</h3>
              <p>Here, you can see projects I've worked so far!</p>
          </div>
            <div className="cards">
                  {projects.map((project) => (
                    <div className="card">
                    <ProjectCard id= {project.id} title={project.title} img={project.img} languages={project.languages} projectURL={project.projectURL} />
                    </div>
                  ))}
            </div>
        </div>
     );
}
 
export default Portfolio;

