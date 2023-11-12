import React, {Component} from 'react'


export default class College extends Component{
    
    render(){
        return (

            <h6 style={{color:'black'}}>{this.props.college}</h6>
        )
    }
}