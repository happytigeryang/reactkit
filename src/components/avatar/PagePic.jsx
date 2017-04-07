import React, {Component} from 'react';

export default class PagePic extends Component {
    render() {
        return (<img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'}/>);
    }
}