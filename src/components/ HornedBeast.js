
import React, { Component } from 'react'

export class HornedBeast extends Component {
    constructor(){
        super()
        this.state={
            fav:0
        }
     
        }
        addfav=()=>{
            this.setState({
                fav:this.state.fav+1
            })

    }
    render() {
        
        return (
            <div>
                {console.log(this.props)}
                <h2>{this.props.data.title}</h2>
                <p>{this.props.data.description}</p>
                <img src={this.props.data.image_url} alt={this.props.title}style={{width:'200px'}}
                onClick={this.addfav} /> 
                <p> &#9825;
                favorited={this.state.fav}</p>
            </div>
            
        )
    }
}

export default HornedBeast
