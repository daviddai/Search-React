import React from "react";
import PropTypes from "prop-types";

import "./search-result-row.css";

class SearchResultRow extends React.PureComponent {

    render() {
        const rowContent = `${this.props.author} - ${this.props.country} - ${this.props.title}`;

        return (
            <div className="search-result-row">
                {rowContent}
            </div>
        );
    }

}

SearchResultRow.propTypes = {
    author: PropTypes.string,
    country: PropTypes.string,
    title: PropTypes.string
};

export default SearchResultRow;
