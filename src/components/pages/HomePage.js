import React, {Component} from 'react';
import { ShoppingCartTable} from "../index";
import {BookListContainer} from "../../containers";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <BookListContainer />
                <ShoppingCartTable />
            </div>
        );
    }
};