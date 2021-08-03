import React, { Component } from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeast extends Component {
 
    render() {
        return (
            <div>


                {console.log(this.props)}
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.data.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{this.props.data.description}</p>
                        <img src={this.props.data.image_url} alt={this.props.title}style={{width:'200px'}}
                 />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>

            </div>


        )
    }
}

export default SelectedBeast
