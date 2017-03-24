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
                position: 'absolute',
                top: '0px',
                right: '0px',
                height: '100px',
                width: '100px',
                backgroundColor: 'red'
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