import React from 'react';
import { shallow } from 'enzyme';
import Gift from './Gift';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id }, removeGift: mockRemove };
    const gift = shallow(<Gift {...props} />);

    it('renders properly', () => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes a person and present in `state`', () => {
        expect(gift.state()).toEqual({ person: '', present: '' });
    });

    describe('when typing into the person input', () => {
        const uncleName = 'Uncle';
        beforeEach(() => {
            gift.find('.input-person').simulate('change', { target: { value: uncleName } });
        });

        it('updates the person in `state`', () => {
            expect(gift.state().person).toEqual(uncleName);
        });

    });

    describe('when typing into the present input', () => {
        const presentName = 'Golf Clubs';
        beforeEach(() => {
            gift.find('.input-present').simulate('change', { target: { value: presentName } });
        });

        it('updates the present in `state`', () => {
            expect(gift.state().present).toEqual(presentName);
        });
    });

    describe('when clicking the `Remove Gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callback', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        });
    })
});
