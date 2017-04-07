import React, {Component} from 'react';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            AccountName: props.name,
            CurrentDate: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        this.setState({CurrentDate: new Date()});
    }
    render() {
        return <span>this is SignUp panel.{this.state.AccountName}<br/>
            <h4>{this.props.aaa}|{this.props.bbb}</h4>
            <h3>Current DateTime: {this
                    .state
                    .CurrentDate
                    .toLocaleTimeString()}.</h3>
        </span>
    }
}