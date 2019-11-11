import React from 'react';
import PropTypes from 'prop-types';
import './styles/css/book-list-item.css';
import {Link} from "react-router-dom";
import * as Routes from '../constants/routes';

const BookListItem = ({book}) => {
    const { id, title, author, price, coverImage } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="book-details">
                <Link to={Routes.CART.replace(':id', id)}>
                    <div className="book-title">{title}</div>
                </Link>
                <div className="book-author">{author}</div>
                <div className="book-price">${price}</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>

        </div>
    );
};

BookListItem.propTypes = {
    book: PropTypes.object.isRequired,
};

export default BookListItem;