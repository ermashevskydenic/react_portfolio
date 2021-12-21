import React from 'react';
import '../App.css';

function Toolbar(props) {
    const {filters, selected, onSelectFilter} = props;

    return (
        <div className="toolbar">
            {filters.map((filter, index) => (
                <button
                    key={index}
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