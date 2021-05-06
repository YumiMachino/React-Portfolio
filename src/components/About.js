import React from 'react';
import '../App.css';
import './About.css'
import ProgressBar from './ProgressBar';

const About = () => {

    const testData = [
        {id:1, percentage: 60},
        {id: 2, percentage: 30 },
        {id:3, percentage: 53 },
    ];
  
    const programming_skills = [
        {id: "HTML_skill", content: "HTML", percentage: 90},
        {id: "CSS_skill", content: "CSS", percentage: 70},
        {id: "JavaScript_skill", content:"JavaScript", percentage:85},
        {id: "Swift_skill", content: "Swift", percentage:80},
        {id: "Objective-C_skill", content: "Objective-C", percentage:70},
        {id: "Java_skill", content: "Java", percentage: 60},
        {id: "Python_skill", content: "Python", percentage: 70}
    ]

    const other_skills = [
        {id: "iOS_skill", content:"UIKit, CoreData", percentage: 70},
        {id: "Web_skill", content: "React(Next.js)", percentage: 75},
        {id: "Tool_skill", content:"Git, Bash", percentage: 60}
    ]

    return ( 
        <div className="about-section">
            <div className="about-wrapper">
                <div className="about-container">

                    <div className="skills">
                        <div className="empty-container" />
                        <h5 className="skill_category">Programming Skills</h5>
                        {programming_skills.map((skill) => (
                            <>
                                <div className="skill-name">
                                    <span className="skill-name-left">{skill.content}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                            <ProgressBar key={skill.id} percentage={skill.percentage}/>
                            </>
                        ))}
                        <h5 className="skill_category">Frameworks/Tools</h5>
                          {other_skills.map((skill) => (
                            <>
                                <div className="skill-name">
                                    <span className="skill-name-left">{skill.content}</span>
                                    <span className="skill-percentage">{skill.percentage}%</span>
                                </div>
                            <ProgressBar key={skill.id} percentage={skill.percentage}/>
                            </>
                        ))}

                    </div>

                    <div className="about-me">
                        <h5 className="title-left">About Me</h5>
                        <p>About me section</p>
                        {/* <p>{about_me}</p> */}
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default About;