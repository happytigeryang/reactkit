import React, {Component, PropTypes} from 'react';
import pstyle from './product.css';

export default class CartItem extends Component {
    static cartItemPropTypes = {
        item: PropTypes.string.isRequired
    }
    render() {
        return (

            <li>
                <span >product:</span>
                <span className={pstyle.pprice}>{this.props.item}</span>
            </li>
        );
    }
}