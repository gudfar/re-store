import React, {Component} from 'react';
import {BookListItem, ErrorIndicator, Spinner} from "./index";
import {connect } from 'react-redux';
import {withBookstore} from "./hoc";
import {booksLoaded, booksRequested, booksFailed} from "../actions";
import {compose} from '../utils'
import './styles/css/book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookStoreService, booksLoaded, booksRequested, booksFailed } = this.props;
        booksRequested();
        bookStoreService.getBooks()
            .then((data) => booksLoaded(data))
            .catch((error) => booksFailed(error));
    }


    render() {
        const {books, loading, error} = this.props;

        if (loading) {
            return (<Spinner/>);
        }

        if (error) {
            return (<ErrorIndicator/>);
        }

        return (
            <ul className="book-list">
                {books.map((book) => (
                    <li key={book.id} className="list-group-item">
                        <BookListItem book={book} />
                    </li>
                ))}
            </ul>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        books: state.books,
        loading: state.loading,
        error: state.error
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch);
// };

const mapDispatchToProps =  {
    booksLoaded,
    booksRequested,
    booksFailed
};

export default compose(
    withBookstore,
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
