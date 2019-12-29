import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.scss';

const NavigationItem = (props) => {
    const {isActive, label, onItemSelected, path} = props;
    const linkClassName = isActive === true ? 'navigation__link navigation__link--active' : 'navigation__link';
    
    return (
        <div onClick={onItemSelected}>
            <div className='navigation__active-indicator'>
                {isActive && '|'}
            </div> 
            <Link to={path} className={linkClassName}> {label} </Link>
        </div>
    )
}
export default NavigationItem;