import React, {Component, PropTypes} from 'react';
import ItemInfo from './ItemInfo'
import CartItemList from './CartItemList'

export default class ProductItem extends Component {
    constructor(props, context)
    {
        super(props, context);
        this.state = {
            items: []
        };
        console.log("this is constructor.");
    }
    _addToCart(item) {
        console.log(`item ${item} has beed added to cart list...`);
        this.setState({
            items: [
                ...this.state.items,
                item
            ]
        });

    }
    render() {
        return (
            <div
                style={{
                width: '100%',
                height: '100%'
            }}>
                <ItemInfo
                    addToCart={this
                    ._addToCart
                    .bind(this)}/>
                <CartItemList items={this.state.items}/>
            </div>
        )
    }
}