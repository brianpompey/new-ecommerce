import React from 'react';
import Recipe from './../../assets/recipes.jpg';
import Grill from './../../assets/grills.jpg';
import "./styles.scss";

const Directory = props => {
    return (
      <div className="directory">
        <div className="wrap">
          <div
            className="item"
            style={{
              backgroundImage: `url(${Grill})`
            }}
          >
            <a>
              Grills
            </a>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${Recipe})`
            }}
          >
            <a>
              Recipes
            </a>
          </div>
        </div>
      </div>
    );
  };
  
export default Directory;