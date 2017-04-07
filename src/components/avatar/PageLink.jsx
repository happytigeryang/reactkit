import React, {Component, PropTypes} from 'react';

export default class PageLink extends Component {
    static itemInfoPropTypes = {
        pagename: PropTypes.any.isRequired
    }
    constructor(props) {
        super();
    }
    render() {
        return (
            <a href={'https://www.facebook.com/' + this.props.pagename}>
                {this.props.pagename}
            </a>
        );
    }
}
