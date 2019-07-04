import React from 'react';
import './HSearchListStyle.scss'

const EMPTY_LIST_MSG = "Nothing to display";

export function ListComponent(props) {
    if (props.items.length === 0) {
        return <div className="info-text">{EMPTY_LIST_MSG}</div>
    }

    let columnLabels = Object.keys(props.items[0]).map((column => {
        return (<th>{column}</th>);
    }));

    let list = props.items.map((item) => {
        let columnValues = Object.values(item).map((value)=>{
            let tmpValue = String(value);

            if (tmpValue.startsWith(props.filterText)) {
                tmpValue = (
                    <>
                        <span style={{ color: 'red' }}>
                            {tmpValue.substring(0, props.filterText.length)}
                        </span>
                        {tmpValue.substring(props.filterText.length)}
                    </>
                );
            }

            return (
                <td>{tmpValue}</td>
            );
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