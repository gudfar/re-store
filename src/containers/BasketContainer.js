import React from 'react';
import { connect } from 'react-redux';
import '../components/styles/css/shopping-cart-table.css';

const BasketContainer = ({ items, total, onIncrease, onDecrease, onDelete }) => {
    if (!items.length) {
        return null;
    }
    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Item</th>
                    <th>Count</th>
                    <th>Amount</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>
                { items.map((item, index) => {
                    const { id, title, count, price } = item;
                    return (
                        <tr key={id}>
                            <td>{index + 1}</td>
                            <td>{title}</td>
                            <td>{count}</td>
                            <td>${price}</td>
                            <td>
                                <button
                                    onClick={() => onDelete(id)}
                                    className="btn btn-outline-danger btn-sm float-right">
                                    <i className="fa fa-trash-o" />
                                </button>
                                <button
                                    onClick={() => onIncrease(id)}
                                    className="btn btn-outline-success btn-sm float-right">
                                    <i className="fa fa-plus-circle" />
                                </button>
                                <button
                                    onClick={() => onDecrease(id)}
                                    className="btn btn-outline-warning btn-sm float-right">
                                    <i className="fa fa-minus-circle" />
                                </button>
                            </td>
                        </tr>
                    )
                }) }
                </tbody>
            </table>

            <div className="total">
                Total: ${total}
            </div>
        </div>
    );
};

const mapStateToProps = ({basketReducer: state}) => {
    return {
        items: state.items,
        total: state.total
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: () => {
            console.log('On delete!');
        },
        onIncrease: () => {
            console.log('On increase!');
        },
        onDecrease: () => {
            console.log('On onDecrease!');
        },
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(BasketContainer);
