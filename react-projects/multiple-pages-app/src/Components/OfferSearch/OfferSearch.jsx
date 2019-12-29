import React from 'react';
import OfferCard from "../OfferCard/OfferCard";

const OfferSearch = (props) => {

    return (
        <div>
            <OfferCard 
                expiryDate="22.10.19"
                logoPath="logo-zaczytani.png"
                hoursPerWeek={3}
                taskDescription="Sortowanie kartonów z książkami"
                title='zaczytani'
            />
            <OfferCard 
                expiryDate="11.11.19"
                logoPath="logo-szlachetna-paczka.png"
                hoursPerWeek={5}
                taskDescription="Zbieranie pieniędzy na ulicy"
                title='szlachetna paczka'
            />
        </div>

        
    );

}

export default OfferSearch;