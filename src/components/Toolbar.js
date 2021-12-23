import React from 'react';
import '../App.css';
import { shortid } from 'shortid';

function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;

    return (
        <div className="toolbar">
            {filters.map((filter) => (
                <button
                    key={shortid.generate()}
                    onClick={() => onSelectFilter(filter)}
                    className={selected === filter ? 'filter-selected' : 'filter'}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default Toolbar;