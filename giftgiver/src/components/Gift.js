import React, { Component } from '../../node_modules/@types/react';
import { Form, FormGroup, FormControl, FormLabel, Button } from '../../node_modules/react-bootstrap';

class Gift extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: '',
            present: ''
        }
    }
    render() {
        return (
            <div>
                <Form>
                    <FormGroup>
                        <FormLabel>Person</FormLabel>
                        <FormControl
                            className='input-person'
                            onChange={event => this.setState({ person: event.target.value })}
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Present</FormLabel>
                        <FormControl
                            className='input-present'
                            onChange={event => this.setState({ present: event.target.value })}
                        />
                    </FormGroup>
                </Form>
                <Button className='btn-remove' onClick={() => this.props.removeGift(this.props.gift.id)}>Remove Gift</Button>
            </div>
        )
    }
}

export default Gift;
