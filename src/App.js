import './App.css';
import Navbar from './components/Navbar';
import { Button, Container } from '@material-ui/core';
import Intro from './components/Intro';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import About from './components/About';
import Portfolio from './components/Portfolio';


function App() {

  return (
    
    <Router>  
      <div class="nav-intro-section">
         <Navbar />
      {/* <Switch>
        <Route path='/' exact></Route>
      </Switch> 
       <Intro /> */}
       <Intro />
      </div>
      <About />
      <Portfolio />
     
    </Router>
    
   
   
     
  );
}

export default App;
