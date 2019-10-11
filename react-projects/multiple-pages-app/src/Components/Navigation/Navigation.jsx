import React, {useState} from 'react';
import './Navigation.scss';
import NavigationItem from './NavigationItem';
import { iconLabels, MenuIcon } from '../Icon/Icon';


const Navigation = (props) => {

    const {items, changeActiveItem} = props
    const [isExpanded, setIsExpanded] = useState(false);

    const expandableSectionClass = isExpanded 
        ? 'navigation__expandable-section navigation__expandable-section--expanded'
        : 'navigation__expandable-section';
        
    return (
        <div className="navigation">
            <div className="navigation__header">
                <div  
                    className="navigation__expand-button-container"
                    onClick={() => setIsExpanded(true)}
                >
                    <MenuIcon icon={iconLabels.EXPAND_MENU} />
                </div>
                <div className="navigation__title-container">
                    <a className="navigation__title-container--title">WOLONTARIATY</a>
                </div>
                <div className="navigation__search-icon"></div>
            </div>

            <div className={expandableSectionClass}>
                <div className='navigation__expandable-left-panel'>
                    <div className='navigation__menu'>
                        {
                            items.map((item) => (
                                <NavigationItem
                                    isActive={item.isActive}
                                    key={item.label}
                                    label={item.label}
                                    onItemSelected={() => {
                                        changeActiveItem(item.label)
                                        setIsExpanded(false);
                                    }}
                                    path={item.path}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='navigation__expandable-right-panel' onClick={() => setIsExpanded(false)}>
                    <div className='navigation__collapse-button-container'>
                        <MenuIcon icon={iconLabels.EXPAND_MENU}/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Navigation;