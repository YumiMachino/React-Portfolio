import ProjectCard from "./ProjectCard";
import './Portfolio.css'

const Portfolio = () => {
    return ( 
        <div className="portfolio-section">
          <div className="portfolio_title">
              <h3>PORTFOLIO</h3>
              <p>Here, you can see projects I've worked so far!</p>
          </div>
            <div className="cards">
                <div>
                  <ProjectCard /> 
                </div>
                <div>
                  <ProjectCard /> 
                </div>
                <div>
                  <ProjectCard /> 
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;
