import React, {Component} from 'react';

export default class RefC extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this
            .handleClick
            .bind(this);
    }
    handleClick() {
        // Explicitly focus the text input using the raw DOM API.
        if (this.myTextInput !== null) {
            this
                .myTextInput
                .focus();
        }
    }
    render() {
        return (
            <div>
                <input type="text" ref={(ref) => this.myTextInput = ref}/>
                <input type="button" value="Focus the text input" onClick={this.handleClick}/>
            </div>
        );
    }
}