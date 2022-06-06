import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import SinglePost from './components/Pages/Single Post/SinglePost';
import Write from './components/Pages/Write/Write';
import Profile from './components/Pages/Profile/Profile';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';
import Allposts from './components/All Posts/allposts';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Contact from './components/Contact/Contact';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' ><Home /></Route>
          <Route path='/register' > <Register /></Route>
          <Route path='/login' ><Login /></Route>
          <Route path='/write' ><Write /></Route>
          <Route path='/profile' ><Profile /></Route>
          <Route path='/post/:postId' ><SinglePost /></Route>
          <Route path='/post/:postId' ><SinglePost /></Route>
          <Route path='/allposts' ><Allposts /></Route>
          <Route path='/contact' ><Contact /></Route>
        </Switch>
      </BrowserRouter>
    </>




  )
}

export default App