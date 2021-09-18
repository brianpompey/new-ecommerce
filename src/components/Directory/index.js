import React from 'react';
import Recipe from './../../assets/recipes.jpg'
import Grill from './../../assets/grills.jpg'

const Directory = props => {
    return(
        <div className="Directory">
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Recipe})`
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage: `url(${Grill})`
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Directory;