import React from "react";
import PropTypes from "prop-types"
import SearchResultRow from "./SearchResultRow";

import "./search-results.css";

class SearchResults extends React.PureComponent {

    render() {
        if (this.props.books) {
            return (
                <div className="search-results">
                    {
                        this.props.books.map(
                            (book, i) => (
                                <SearchResultRow key={i}
                                                 title={book.title}
                                                 author={book.author}
                                                 country={book.country}
                                />
                            )
                        )
                    }
                </div>
            )
        } else {
            return null;
        }
    }

}

SearchResultRow.propTypes = {
    books: PropTypes.array
};

export default SearchResults;
