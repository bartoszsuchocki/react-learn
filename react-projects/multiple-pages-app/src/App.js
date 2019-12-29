import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import OfferSearch from './Components/OfferSearch/OfferSearch';
import OfferCreation from './Components/OfferCreation/OfferCreator';
import './App.scss'
import ImageCropper from './Components/Common/ImageCropper/ImageCropper';

const navigationItemsLabels = {
    OFFER_SEARCH : 'SZUKAJ',
    OFFER_CREATION : 'STWÓRZ OGŁOSZENIE',
    LOGIN : 'ZALOGUJ SIĘ'
}

const initialNavigationItems = [
  {label: navigationItemsLabels.OFFER_SEARCH, path: '/'}, 
  {label: navigationItemsLabels.OFFER_CREATION, path: '/offer'},
  {label: navigationItemsLabels.LOGIN, path: '/login'}
];

function App() {

  const [activeItemLabel, setActiveItemLabel] = useState(navigationItemsLabels.OFFER_SEARCH);

  const changeActiveItem = (activeItemLabel) => {
    setActiveItemLabel(activeItemLabel);
  }

  let navigationItems = initialNavigationItems.map((item) => {{
    const toReturn = {
      ...item,
      isActive : item.label === activeItemLabel ? true : false
    }
    return toReturn;
  }});

  return (
    
    <Router>
      <Navigation 
        changeActiveItem = {changeActiveItem}
        items={navigationItems}
      />
      <div style={{overflowY: "scroll"}}>
      <Route exact path="/" component={OfferSearch} />
      <Route path="/offer" component={OfferCreation} />
      {/* just a sample cropper usage stub */}
      <Route 
        path="/crop" 
        render={() => (
          <ImageCropper
            image="szlachetna-paczka-big.png"
            initialAspect={4/3}
            initialCrop={{x : 0, y : 0}}
            initialZoom={1}
          />
        )}
      />
      </div>
    </Router>
  );
}

export default App;
