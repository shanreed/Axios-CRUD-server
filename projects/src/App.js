import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import Home from './components/home/Home';
import ItemsList from './components/ItemsList';
import Item from './components/Item';
import ItemForm from './components/ItemForm';
import UpdateForm from './components/UpdateForm';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:3333/items')
      .then(res => setItems(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="app">
      <nav className = 'header'>
        <h1 className="store-header">Shannon's Space</h1>
      </nav>
          <div className = 'contents'>
            <div className="nav-links links">
                <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                      <NavLink exact to="/">
                        Home
                      </NavLink>
                  </nav>
                  <nav>
                      <NavLink to="/item-list">
                        Explore
                      </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  <nav>
                  <NavLink exact to="#">
                    New Project 
                  </NavLink>
                 </nav>
                 <nav>
                    <NavLink exact to="/item-form">
                      Add Project
                    </NavLink>
                  </nav>
                  
                  
                  
                </div>


      <Route exact path="/"
             render={props => (
             <Home
             {...props} // this is the same as below
            //               match={props.match}
            //               history={props.history}
            //               location={props.location}
            items={items}
             /> )}/>
      <Route
        exact
        path="/item-list"
        render={props => (
          <ItemsList
            {...props} // this is the same as below
            //               match={props.match}
            //               history={props.history}
            //               location={props.location}
            items={items}
          />
        )}
      />
      <Route
        path="/item-list/:id"
        render={props => (
          <Item {...props} items={items} updateItems={setItems} />
        )}
      />
      <Route
        path="/item-form"
        render={props => <ItemForm {...props} updateItems={setItems} />}
      />
      </div>
    </div>
  );
};


export default App;
