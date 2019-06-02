import React from 'react'
import SearchComponent from './SearchComponent';
import ListComponent from './ListComponent';

const DEFAULT_MAX_ROWS_DISPLAYED = 50;

class SearchableListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { searchText: '', maxRowsDisplayed: DEFAULT_MAX_ROWS_DISPLAYED, filteredItems: [] };
        this.handleSearchTextChanged = this.handleSearchTextChanged.bind(this);
        this.handleListReload = this.handleListReload.bind(this);
        this.filter = this.filter.bind(this);
    }
    handleSearchTextChanged(text) {
        this.setState({ searchText: text });
    }
    handleListReload(event) {
        this.setState({ maxRowsDisplayed: document.querySelector("#max-rows").value });
    }
    filter(filterText) {
        let filteredList = this.props.items.filter((item) => {
            for (let column in item) {
                if (item[column].toString().startsWith(filterText)) {
                    return true;
                }
            }
            return false;
        }).slice(0,this.state.maxRowsDisplayed);
        return filteredList;
    }
    render() {
        let l = this.filter(this.state.searchText);
        return (
            <>
                <SearchComponent class="search-bar" onSearchTextChanged={this.handleSearchTextChanged} />
                <br />
                <div id="table-settings">
                    <div>
                        <label htmlFor="max-rows">Rows: </label><input type="text" id="max-rows" />
                        <button onClick={this.handleListReload}>Reload</button>
                    </div>
                    <div>
                        other settings
                    </div>
                </div>
                <ListComponent items={l} filterText={this.state.searchText}/>
            </>
        );
    }
}
export default SearchableListComponent;
