import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/grills">
              Grills
            </Link>
          </div>
          <div
            className="item"
            style={{
              backgroundImage: `url(${Recipe})`
            }}
          >
            <Link to="/recipes">
              Recipes
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
export default Directory;