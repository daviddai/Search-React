import React from "react";
import SearchInput from "./SearchInput";
import SearchResults from "./SearchResults";
import filterBooks from "./filter";

import "./app.css";

class App extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            filterBooks: []
        }
    }

    handleSearchChanged = event => {
        this.setState({
            filteredBooks: filterBooks(event.target.value, 20)
        });
    };

    render() {
        return (
            <div>
                <SearchInput textChanged={this.handleSearchChanged}/>
                <SearchResults books={this.state.filteredBooks}/>
            </div>
        );
    }

}

export default App;