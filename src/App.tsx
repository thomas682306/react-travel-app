import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {Navbar} from './component/Navbar';
import Home from './component/pages/Home'
import Form from './component/Form';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path='/sign-up' component={Form}></Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
