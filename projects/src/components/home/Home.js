import React from 'react';

import placeholder from '../../images/placeholder.jpg'
import familyTree from '../../images/family-tree-snapshot.png'


function Home(props) {
  const routeToShop = event => {
    event.preventDefault();
    props.history.push('/item-list');
  };

  return (
    <div className="home-wrapper">
      <div className = 'home-card"'>
       {props.items.map(function(item) {
         if(item.id <= 4) {
            return (
              
        <div
          className="item-card"
          key={item.id}
        >
          <div className="item-content">
          <img
            className="item-list-image"
            src={familyTree}
            alt=''
          />
          <p>{item.name}</p>
          <p>{item.description}</p>
          </div>
        </div>
       
            )
         }}
       )     
         }
          </div>

      <div className = 'home-center'>
      <img
        className="home-image"
        src={placeholder}
        alt=""
      />
      <button onClick={routeToShop} className="md-button shop-button">
        See All Projects
      </button>
      </div>

      <div className = 'home-card"'>
      
       {props.items.map(function(item) {
         if(item.id >= 4 && item.id <= 8) {
            return (
              
        <div
          className="item-card"
          key={item.id}
        >
          <div className="item-content">
          <img
            className="item-list-image"
            src={familyTree}
            alt=''
          />
          
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
        </div>
            )
         }}
       )     
         }
          </div>
      
    </div>
  
  )
}

export default Home;
