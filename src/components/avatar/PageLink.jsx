import React, {Component} from 'react';

export default class PageLink extends Component {
    render() {
        return (
            <a href={'https://www.facebook.com/' + this.props.pagename}>
                {this.props.pagename}
            </a>
        );
    }
}
