import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import ContentOne from './pages/infocontentone';
import ContentTwo from './pages/infocontenttwo';
import ContentThree from './pages/infocontentthree';


function App() {

  return (
    <Router>
    <Route path="/" component={Home} exact />
      <Switch>
      <Route path="/signin" component={SignInPage} exact />
      <Route path="/infocontentone" component={ContentOne} exact />
      <Route path="/infocontenttwo" component={ContentTwo} exact />
      <Route path="/infocontentthree" component={ContentThree} />
      </Switch>
    </Router>
  );
}

export default App;
