import React, {Component} from 'react';
import PagePic from './PagePic'
import PageLink from './PageLink'

export default class Avatar extends Component {
    render() {
        return (
            <div>
                <PagePic pagename={this.props.pagename}/>
                <PageLink pagename={this.props.pagename}/>
            </div>
        );
    }
}