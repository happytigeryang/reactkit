import React, {Component, PropTypes} from 'react';

export default class ItemInfo extends Component {
    state = {}
    static itemInfoPropTypes = {
        addToCart: PropTypes.func.isRequired
    }
    constructor(props, context) {
        super(props, context);
    }
    _AddToCart() {
        let node = this.refs.itemInput;
        console.log('click add to cart button on product detail pagew...');
        console.log(`add item ${node.value} to cart...`);
        if (node.value != '') {
            this
                .props
                .addToCart(node.value.trim());
            node.value = '';
        }

    }
    render() {
        return (
            <div>
                <input type="text" ref="itemInput" placeholder="input a item then add to cart"/>
                <button
                    onClick={this
                    ._AddToCart
                    .bind(this)}>Add to cart</button>
            </div>
        );
    }
}