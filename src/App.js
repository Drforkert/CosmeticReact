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
      <Route path="/signin" component={SignInPage} />
      <Route path="/infocontentone" component={ContentOne} exact />
      <Route path="/infocontenttwo" component={ContentTwo} exact />
      <Route path="/infocontentthree" component={ContentThree} exact />
      <Route path="/infocontentfour" component={ContentFour} exact />
      </Switch>
    </Router>
  );
}

export default App;
