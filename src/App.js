import './App.css';
import Navbar from './components/Navbar';
import { Button, Container } from '@material-ui/core';
import Intro from './components/Intro';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


function App() {

  return (
    <>
    <Router>  
      <Navbar />
      <Switch>
        <Route patj='/' exact></Route>
      </Switch> 
      <Intro />
    </Router>
    </>
   
   
     
  );
}

export default App;
