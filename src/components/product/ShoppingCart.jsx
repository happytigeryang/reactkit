// var React = require('react');
// var Comp = React.createClass({
//     propTypes: {
//         name: React.PropTypes.string
//     },
//     render() {
//         return (
//             <div>this is es 5 {this.props.name}</div>
//         )
//     }
// });

// module.exports=Comp;

import React,{Component,PropTypes} from 'react'

export default class  Comp extends Component{
    render(){
        return(<div onClick={this.onClick.bind(this)}>this is es6 {this.props.name}</div>)
    }
    getDate(){

    }
    onClick(e){
        console.log(e);
    }
}

Comp.propTypes={
    name:PropTypes.string
}
Comp.defaultProps={
    name:"default"
}


