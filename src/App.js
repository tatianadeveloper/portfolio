import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
  Switch,
  Route,
} from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import './App.css';

import NavHeader from './components/Nav';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import Education from './components/Education';
import Project from './components/Project';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default class App extends Component {
  render() {
    const navRoutes = [
      { path: '/about', component: HomePage },
      { path: '/skills', component: Skills },
      { path: '/education', component: Education },
      { path: '/projects', component: Project },
      { path: '/experience', component: Experience },
      { path: '/contact', component: Contact },
      { path: '/', component: HomePage },
    ];

    return (
      <HashRouter>
        <Container fluid={true}>
          <NavHeader />
          <Switch>
            {navRoutes.map((route) => {
              return (
                <Route exact path={route.path} component={route.component} />
              );
            })}
          </Switch>
        </Container>
      </HashRouter>
    );
  }
}
