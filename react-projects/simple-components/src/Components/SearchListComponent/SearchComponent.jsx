import React from 'react';
class SearchComponent extends React.Component{
    constructor(props){
        super(props);
        this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    }
    handleSearchTextChange(event){
        this.props.onSearchTextChanged(event.target.value);
    }
    render(){
        return (
            <input className={this.props.class} type="search" onChange={this.handleSearchTextChange} placeholder="Search"/>
        );
    }
}
export default SearchComponent