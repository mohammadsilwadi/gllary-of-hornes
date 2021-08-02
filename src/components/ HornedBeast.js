import React, { Component } from 'react'

export class HornedBeast extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
                <img src={this.props.img} alt={this.props.title} />
            </div>
        )
    }
}

export default HornedBeast
