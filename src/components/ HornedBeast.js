
import React, { Component } from 'react'
import { Card } from 'react-bootstrap';
export class HornedBeast extends Component {
    constructor(){
        super()
        this.state={
            fav:0,
            modal: false
        }
     
        }
        addfav=()=>{
            this.setState({
                fav:this.state.fav+1
            })
        }
        handelModal = () => {
            this.setState({ modal: true })
          }
          handelClose = () => {
            this.setState({ modal: false })
          }
          render() {
        
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{this.props.data.title}</Card.Title> 
                <Card.Text> <p>{this.props.data.description}</p></Card.Text>
                <img src={this.props.data.image_url} alt={this.props.title}style={{width:'200px'}}
                 onClick={this.handelModal}/> 
                <p  onClick={this.addfav} > &#9825;
                favorited={this.state.fav}</p>
                </Card.Body>
                </Card>
            </div>
            
        )
    }
}

export default HornedBeast
