import React, {Component} from 'react';
import {BookListItem} from "./index";
import {connect } from 'react-redux';
import {withBookstore} from "./hoc";
import {booksLoaded} from "../actions";
import {compose} from '../utils'
import './styles/css/book-list.css';

class BookList extends Component {

    componentDidMount() {
        const { bookStoreService } = this.props;
        this.props.booksLoaded(bookStoreService.getBooks());
    }


    render() {
        const {books} = this.props;
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
        books: state.books
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         booksLoaded
//     }, dispatch);
// };

const mapDispatchToProps =  {
    booksLoaded
};

export default compose(
    withBookstore,
    connect(mapStateToProps, mapDispatchToProps)
)(BookList);
