import React, {Component, PropTypes} from 'react';
import ProductItem from './product/ProductItem'
import Comp from './product/ShoppingCart'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsPromotion: true
        };
    }
    render() {
        return (
            <div>app:111<ProductItem/>
                <label>{this.state.IsPromotion
                        ? " $$Promotion"
                        : ""}</label>
                <Comp name="ty"/>
            </div>
        )
    }
}