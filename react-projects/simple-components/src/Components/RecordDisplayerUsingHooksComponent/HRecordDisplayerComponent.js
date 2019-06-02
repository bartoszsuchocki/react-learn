import React, { useState } from 'react';
import './HRecordDisplayerComponent.css'
import { getTodoTasks } from '../../Helpers/DataProvider';
import { SearchableListComponent } from '../SearchListUsingHooksComponent/HSearchableListComponent'

const FETCH_DATA_MSG = "Click Fetch data button to see some records";

export function RecordDisplayerComponent(props) {

    const [spinnerVisible, setSpinnerVisible] = useState(true);
    const [items, setItems] = useState(null);

    function handleDataReload() {
        setItems([]);
        setSpinnerVisible(true);
        getTodoTasks((jsonResult) => {
            setItems(jsonResult);
            setSpinnerVisible(false);
        });
    }

    let listContent;
    
    if (items == null) {
        listContent = (
            <div className="info-container">{FETCH_DATA_MSG}</div>
        );
    }
    else {
        listContent = spinnerVisible
            ? <div className="spinner-container"><div className="spinner"></div></div>
            : <SearchableListComponent items={items} />;
    }

    return (
        <div id="container">
            <button id="fetch-button" onClick={handleDataReload}>Fetch data</button>
            {listContent}
        </div>
    );
}