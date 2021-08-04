import React, { Component } from 'react'
import { Form,Button } from 'react-bootstrap';
export class FormSelect extends Component {
    render() {
        return (
            <div>
                <Form>
          <Form.Select aria-label="Default select example">
            <option>select numbers of horns </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">100</option>
          </Form.Select>
          <Button  onSubmit={(e)=>{this.submitHandler(e)}}>Submit here</Button>
        </Form>
            </div>
        )
    }
}

export default FormSelect
