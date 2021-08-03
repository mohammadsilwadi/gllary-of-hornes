import React, { Component } from 'react';
import HornedBeast from "./ HornedBeast";
import SelectedBeast from "./SelectedBeast "
import { Container, Row, Col } from 'react-bootstrap';
import data from "../data/data.json";
export class Main extends Component {

    render() {
let array=data
        return (
            <Container>
        <Row>
            
            
                {array.map(Beast => {

                    
                    return <Col> <HornedBeast data={Beast}
                key={Beast.title}/>


                <SelectedBeast data={Beast}
                key={Beast.title}/>
                
                 </Col>
                })}
                </Row>
</Container>
            

        )
    }

}


export default Main

