import '../App.css';
import './Intro.css'
import { Button, Container } from '@material-ui/core';


const Intro = () => {
    return ( 
        <div className="intro-section">
            <img src=""></img>
            <h1>Hello</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et mi velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris consectetur dui et ligula molestie, et imperdiet ligula faucibus. Cras tincidunt bibendum nunc, at molestie orci. Maecenas ut tortor sed odio laoreet consequat sit amet ac dolor. Mauris eleifend elit est, sed pellentesque nunc volutpat eget. Sed ac ante in ex consequat hendrerit vitae nec tellus. Donec hendrerit pretium volutpat. Maecenas dictum massa ac ipsum laoreet, at efficitur ante condimentum. Mauris ornare quis dolor ut condimentum. Aenean dictum egestas diam sit amet facilisis. Pellentesque at nisi tellus. Phasellus vitae pretium eros, vehicula sodales turpis. Proin ligula nisl, vestibulum a eleifend non, varius sit amet dui. Nullam non quam elit.</p>
            <Button variant="outlined" color="primary">View My Work</Button>
        </div>
     );
}
 
export default Intro;