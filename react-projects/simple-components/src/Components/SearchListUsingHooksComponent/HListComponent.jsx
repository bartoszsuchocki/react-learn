import React from 'react';
import './HSearchListStyle.css'

const EMPTY_LIST_MSG = "Nothing to display";

export function ListComponent(props){
    if (props.items.length === 0) {
        return <div className="info-text">{EMPTY_LIST_MSG}</div>
    }

    let columnLabels = [];
    Object.keys(props.items[0]).forEach((column) => {
        columnLabels.push(<th>{column}</th>)
    });

    let list = props.items.map((item) => {
        let columnValues = [];
        
        Object.keys(item).forEach((column) => {
            let value = item[column].toString();
            if (value.startsWith(props.filterText)) {
                value = (
                    <>
                        <span style={{ color: 'red' }}>
                            {value.substring(0, props.filterText.length)}
                        </span>
                        {value.substring(props.filterText.length)}
                    </>
                );
            }
            columnValues.push(
                <td>{value}</td>
            )
        });
        
        return (
            <tr className='data-row' key={item.id}>
                {columnValues}
            </tr>
        );
    });

    return (
        <>
            <table className="data-table">
                <tbody>
                    <tr>{columnLabels}</tr>
                    {list}
                </tbody>
            </table>
        </>
    );
}