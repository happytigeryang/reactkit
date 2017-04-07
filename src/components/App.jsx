import React, {Component, PropTypes} from 'react';
import ProductItem from './product/ProductItem'
import Comp from './product/ShoppingCart'
import SignIn from './account/Signin'
import SignUp from './account/SignUp'
import Avatar from './avatar/AvatarIndex'
import styles from '../app.less'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            IsPromotion: true,
            IsLoggedIn: false
        };
    }
    toDo() {
        this.setState((prevState, props) => ({IsLoggedIn: prevState.IsLoggedIn}));
    }
    render() {
        var isLoggedIn = true || this.state.IsLoggedIn;
        var pp = {};
        pp.aaa = "a001default";
        pp.bbb = "b001default";
        return (
            <div>
                <SignUp name="admin" {...pp} aaa="a001update"/>
                <div className="login-panel">{isLoggedIn
                        ? <span>1<SignIn name="guest"/></span>
                        : <SignUp name="admin" {...pp}/>}
                </div>
                <h1>app lezhi style test sucessed.</h1>
                <ProductItem/>

                <label className="ptitle">{this.state.IsPromotion
                        ? " $$Promotion"
                        : ""}</label>
                <Comp name="ty"/>
                <hr/>
                <div>{'First · Second'}</div>

                <div>First &middot; Second</div>
                <div>{'First \u00b7 Second'}</div>
                <div>{'First ' + String.fromCharCode(183) + ' Second'}</div>
                <div>{[
                        'First ', < span key = "middot" >& middot;
                        </span>, ' Second']}</div>
                <div
                    dangerouslySetInnerHTML={{
                    __html: 'First &middot; Second'
                }}/>
                <div style={{
                    color: "red"
                }}>{'First &middot; Second'}</div>
                <div data-custom-attribute="foo">test</div>
                <Avatar/>
            </div>
        )
    }
}