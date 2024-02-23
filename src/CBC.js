import React, { Component } from 'react'

export default class CBC extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
  render() {
    return (
      <div>
        <p>I am a Class Based Component {this.props.value}</p>
      </div>
    )
  }
}
