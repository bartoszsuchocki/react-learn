import React, { useState } from 'react';
import './HRecordDisplayerComponent.scss'
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
            <div className="container container--info">{FETCH_DATA_MSG}</div>
        );
    }
    else {
        listContent = spinnerVisible
            ? <div className="container container--spinner"><div className="spinner"></div></div>
            : <SearchableListComponent items={items} />;
    }

    return (
        <div className="container">
            <button className="fetch-button" onClick={handleDataReload}>Fetch data</button>
            {listContent}
        </div>
    );
}