import React, {Component, PropTypes} from 'react';

export default class CartItem extends Component {
    static cartItemPropTypes = {
        item: PropTypes.string.isRequired
    }
    render() {
        return (
            <li>{this.props.item}</li>
        );
    }
}