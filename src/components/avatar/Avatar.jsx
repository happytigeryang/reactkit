import React, {Component} from 'react';
import PagePic from './PagePic'
import PageLink from './PageLink'
import RefC from './RefC'

export default class Avatar extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            UserName: "please input username"
        };
        this.userNameChanged = this
            .userNameChanged
            .bind(this);
    }
    userNameChanged(event) {
        this.setState({UserName: event.target.value});
    }
    render() {
        return (
            <div>
                <div><RefC /></div>
                <div>
                    <textarea name="description" defaultValue="This is."/></div>
                <div>
                    <select value="B">
                        <option value="A">Apple</option>
                        <option value="B">Banana</option>
                        <option value="C">Cranberry</option>
                    </select>
                </div>
                this is uncontroll input.
                <input type="text" defaultValue="Hello!"/>
                <br/>
                this is controlled input.
                <input type="text" value={this.state.UserName} onChange={this.userNameChanged}/>
                <br/>
                <label>{this.state.UserName}</label>
                <PagePic pagename={this.props.pagename}/>
                <PageLink pagename={this.props.pagename}/>
            </div>
        );
    }
}