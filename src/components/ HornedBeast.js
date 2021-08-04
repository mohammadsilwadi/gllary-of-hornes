
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
        display=()=>{

            this.props.showDataList({
                img : this.props.imageUrl , 
                title : this.props.title , 
                description : this.props.description
             })    
       }
       displayAddfav = () => {
        this.addfav();
        this.display() 
    }
          render() {    
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>{this.props.title}</Card.Title> 
                <Card.Text> <p>{this.props.description}</p></Card.Text>
                <img src={this.props.imageUrl} alt={this.props.title}style={{width:'200px'}}
                 onClick ={this.displayAddfav}/> 
                <p> &#9825;
                favorited={this.state.fav}</p>
                </Card.Body>
                </Card>
            </div>
            
        )
    }
}

export default HornedBeast
