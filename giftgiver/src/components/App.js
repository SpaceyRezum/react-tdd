import React, { Component } from '../../node_modules/@types/react';
import { Button } from '../../node_modules/react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper/index';

class App extends Component {
    constructor() {
        super();
        this.state = { gifts: [] };
    }

    addGift = () => {
        const { gifts } = this.state;
        gifts.push({ id: max_number(this.state.gifts.map(gift => gift.id)) + 1 });
        this.setState({ gifts });
    }

    removeGift = (id) => {
        const { gifts } = this.state;
        this.setState({ gifts: gifts.filter(gift => gift.id != id) });
    }

    render() {
        return (
            <div>
                <h2>Gift Giver</h2>
                <div className='gift-list'>
                    {
                        this.state.gifts.map(gift => {
                            return (
                                <Gift
                                    key={gift.id}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                />
                            )
                        })
                    }
                </div>
                <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
            </div>
        )
    }
}

export default App;