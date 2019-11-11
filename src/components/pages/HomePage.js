import React, {Component} from 'react';
import {BookList, ShoppingCartTable} from "../index";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <BookList />
                <ShoppingCartTable />
            </div>
        );
    }
};