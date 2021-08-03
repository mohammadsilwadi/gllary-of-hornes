
import React, { Component } from 'react'
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
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
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{this.props.data.title}</Card.Title> 
                <Card.Text> <p>{this.props.data.description}</p></Card.Text>
                <img src={this.props.data.image_url} alt={this.props.title}style={{width:'200px'}}
                onClick={this.addfav} /> 
                <p> &#9825;
                favorited={this.state.fav}</p>
                </Card.Body>
                </Card>
            </div>
            
        )
    }
}

export default HornedBeast
// {/* <Card.Body>
// <Card.Title>{this.props.name}</Card.Title>
// <Card.Text>
// {this.props.title}
// </Card.Text>
// <Button variant="primary">{this.props.age}</Button>
// </Card.Body> */}