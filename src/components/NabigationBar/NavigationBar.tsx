import React from 'react';

const NavigationBar: React.FC = () => {

    return (
        <div className="navigation-bar justify-content-start d-none d-md-flex">
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Skills</a></li>
                <li><a href="#">Education</a></li>
            </ul>
        </div>
    );
};

export default NavigationBar;
