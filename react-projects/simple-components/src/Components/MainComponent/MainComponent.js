import React from 'react';
import './MainComponent.css';
import SearchableListComponent from '../SearchListComponent/SearchableListComponent';
import { getTodoTasks } from '../../Helpers/DataProvider';

const FETCH_DATA_MSG = "Click Fetch data button to see some records";

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], isSpinnerVisible: false };
        this.handleDataReload = this.handleDataReload.bind(this);
        this.beforeFirstFetch = true;
    }

    handleDataReload(event) {
        this.beforeFirstFetch = false;
        this.setState({ isSpinnerVisible: true });
        getTodoTasks((jsonResult) => {
            this.setState({ items: jsonResult, isSpinnerVisible: false });
        })
    }

    render() {
        let listContent;
        if (this.beforeFirstFetch) {
            listContent = (
                <div className="info-container">{FETCH_DATA_MSG}</div>
            );
        }
        else {
            listContent = this.state.isSpinnerVisible
                ? <div className="spinner-container"><div className="spinner"></div></div>
                : <SearchableListComponent items={this.state.items} />;
        }
        return (
            <div id="container">
                <button id="fetch-button" onClick={this.handleDataReload}>Fetch data</button>
                {listContent}
            </div>
        );
    }
}

export default MainComponent;
