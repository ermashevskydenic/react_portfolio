import React from 'react';
import '../App.css';
import { shortid } from 'shortid';
import PropTypes from "prop-types";

function Toolbar({filters, selected, onSelectFilter}) {

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
Toolbar.propTypes = {
    filters: PropTypes.array,
    onSelectFilter: PropTypes.func,
    selected: PropTypes.string
};

Toolbar.defaultProps = {
    filters: ["All", "Websites", "Flayers", "Business Cards"],
    selected: "All",
    onSelectFilter: () => {}
};
export default Toolbar;