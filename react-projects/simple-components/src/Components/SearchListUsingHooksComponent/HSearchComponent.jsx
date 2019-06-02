import React from 'react';

export function SearchComponent(props){
    
    function handleSearchTextChange(event){
        props.onSearchTextChanged(event.target.value);
    }

    return (
        <input className={props.class} type="search" onChange={handleSearchTextChange} placeholder="Search"/>
    );
}