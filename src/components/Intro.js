import '../App.css';
import './Intro.css'
/*import btn from React material-ui*/
import { Button, Container } from '@material-ui/core';
/*React-typing-animation library*/
import Typing from 'react-typing-animation';

const Intro = () => {

    return ( 
        <div className="intro-section">
            <h1 className="intro-title">Hello, <br/>I'm Yumi Machino</h1>
            <p className="intro-subtitle">
                <Typing speed={150} loop={true}>
                    <span>Front End Developer</span>
                    {/* <Typing.Delay ms={200} /> */}
                    <Typing.Backspace count={20}/>
                </Typing>
                </p>
            <Button variant="contained" color="primary">View My Work</Button>
        </div>
     );
}
 
export default Intro;