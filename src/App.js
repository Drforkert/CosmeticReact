import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import ContentOne from './pages/infocontentone';
import ContentTwo from './pages/infocontenttwo';
import ContentThree from './pages/infocontentthree';
import ContentFour from './pages/infocontentfour';

function App() {

  return (
    <Router>
    <Route path="/" component={Home} exact />
      <Switch>
      <Route exact path="/signin" component={SignInPage} />
      <Route exact path="/infocontentone" component={ContentOne} />
      <Route exact path="/infocontenttwo" component={ContentTwo} />
      <Route exact path="/infocontentthree" component={ContentThree} />
      <Route exact path="/infocontentfour" component={ContentFour}/>
      </Switch>
    </Router>
  );
}

export default App;
