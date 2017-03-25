import React, {Component, PropTypes} from 'react';
import CartItem from './CartItem'

export default class CartItemList extends Component {
    static cartItemListPropTypes = {
        items: PropTypes.array
    }
    render() {
        return (
            <ul
                style={{
                position: 'fixed',
                top: '0px',
                right: '0px',
                height: 'auto',
                width: '200px',
                backgroundColor: '#ff0'
            }}>
                {this
                    .props
                    .items
                    .map((item, index) => {
                        return <CartItem key={item} item={item}/>
                    })
}
            </ul>
        );
    }
}