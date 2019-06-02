import React from 'react';
import './SearchListStyle.css';
/* items of list must have id column */
const EMPTY_LIST_MSG = "Nothing to display";
class ListComponent extends React.Component {
    render() {
        if (this.props.items.length === 0) {
            return <div className="info-text">{EMPTY_LIST_MSG}</div>
        }

        let columnLabels = [];
        Object.keys(this.props.items[0]).forEach((column) => {
            columnLabels.push(<th>{column}</th>)
        });

        let list = this.props.items.map((item) => {
            let columnValues = [];
            Object.keys(item).forEach((column) => {
                let value = item[column].toString();
                if (value.startsWith(this.props.filterText)) {
                    value = (
                        <>
                            <span style={{ color: 'red' }}>
                                {value.substring(0, this.props.filterText.length)}
                            </span>
                            {value.substring(this.props.filterText.length)}
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
}
export default ListComponent