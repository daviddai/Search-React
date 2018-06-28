import bookLists from "./books.json";

const filterBooks = (searchText, maxCount) => {

    return bookLists.filter(book => {
        if (book.author.toLowerCase().trim().includes(searchText.toLowerCase())) {
            return true;
        }

        if (book.title.toLowerCase().trim().includes(searchText.toLowerCase())) {
            return true;
        }

        if (book.country.toLowerCase().trim().includes(searchText.toLowerCase())) {
            return true;
        }

        return false;
    }).slice(0, maxCount);

};

export default filterBooks;