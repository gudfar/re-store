import React from 'react';
import './styles/css/shop-header.css';
import {Link} from "react-router-dom";
import * as Routes from '../constants/routes';

const ShopHeader = ({ numItems, total }) => {
    return (
        <header className="shop-header row">
            <Link to={Routes.HOME}>
                <div className="logo text-dark">ReStore</div>
            </Link>
            <div className="shopping-cart">
                <i className="cart-icon fa fa-shopping-cart" />
                {numItems} items (${total})
            </div>
        </header>
    );
};

export default ShopHeader;