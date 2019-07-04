import React, {useState} from 'react';
import {SearchComponent} from './HSearchComponent';
import {ListComponent} from './HListComponent';

const DEFAULT_MAX_ROWS_DISPLAYED = 50;

export function SearchableListComponent(props){
    
    const [searchText, setSearchText] = useState('');
    const [maxRowsDisplayed, setMaxRowsDisplayed] = useState(DEFAULT_MAX_ROWS_DISPLAYED);
    
    function handleSearchTextChanged(text){
        setSearchText(text);
    }

    function handleListReload(){
        setMaxRowsDisplayed(document.querySelector("#max-rows").value);
    }

    function filter(filterText){
        let filteredList = props.items.filter((item) => {
            for (let column in item) {
                if (item[column].toString().startsWith(filterText)) {
                    return true;
                }
            }
            return false;
        }).slice(0, maxRowsDisplayed);
        return filteredList;
    }

    let itemsToDisplay = filter(searchText);

    return (
        <>
            <SearchComponent class="search-bar" onSearchTextChanged={handleSearchTextChanged} />
            <br />
            <div id="table-settings">
                <div>
                    <label htmlFor="max-rows">Rows: </label><input type="text" id="max-rows" />
                    <button onClick={handleListReload}>Reload</button>
                </div>
                <div>
                    other settings
                </div>
            </div>
            <ListComponent items={itemsToDisplay} filterText={searchText}/>
        </>
    );
}