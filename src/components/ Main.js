import React, { Component } from 'react';
import HornedBeast from "./ HornedBeast";

import { Container, Row,Col  } from 'react-bootstrap';

export class Main extends Component {

    render() {
        return (
            <Container>
         <Row>
            {
              this.props.data.map(item => {
                return (
                    <Col> <HornedBeast
                  
                   title={item.title}
                   imageUrl={item.image_url}
                   description={item.description}
                  imglogo={'https://www.freeiconspng.com/thumbs/heart-png/heart-png-15.png'}
                  showDataList ={this.props.showDataList}
                />  </Col>)
          
              })
            }
        </Row>
</Container>
            

        )
    }

}


export default Main

