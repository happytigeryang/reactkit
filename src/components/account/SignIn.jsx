import React, {Component} from 'react';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AccountName: props.name,
            RetryNumber: 0
        }
    }
    loginOnClick() {
        // this.setState((prevState, props) => ({
        //     RetryNumber: prevState.RetryNumber + 1
        // }))
    };
    render() {
        return <div>this is SignIn panel.{this.state.AccountName}
            <button onClick={this.loginOnClick()}>sign in</button>|| Retry Number:{this.state.RetryNumber}

        </div>
    }
}