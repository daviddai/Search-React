import React from "react";
import PropTypes from 'prop-types';

import "./search-input.css";

class SearchInput extends React.PureComponent {

    handleChange = event => {
        this.props.textChanged(event);
    };

    render() {
        return (
            <div className="component-search-input">
                <div>
                    <input onChange={this.handleChange} />
                </div>
            </div>
        );
    }

}

SearchInput.propTypes = {
    textChanged: PropTypes.func
};

export default SearchInput;