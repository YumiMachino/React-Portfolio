import '../App.css';
import './Intro.css'
import { Button, Container } from '@material-ui/core';


const Intro = () => {
    return ( 
        <div className="intro-section">
            <h1 className="intro-title">Hello, <br/>I'm Yumi Machino</h1>
            <p className="intro-subtitle">Front End Developer</p>
            <Button variant="contained" color="primary">View My Work</Button>
        </div>
     );
}
 
export default Intro;