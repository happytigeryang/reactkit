import React, {Component, PropTypes} from 'react';
import pstyle from './product.css';

export default class CartItem extends Component {
    static cartItemPropTypes = {
        item: PropTypes.string.isRequired
    }
    render() {
        return (
            
            <li><span className={pstyle.pprice}>11newegg11</span>{this.props.item}</li>
        );
    }
}