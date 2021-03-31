import React from 'react'
import About from './About'
import { render, cleanup, getByTestId } from '@testing-library/react'

describe('describes the About component', () =>{

    beforeEach(() => {
        console.error = jest.fn();
        console.error('Error')
    })

    afterEach(() => {
        cleanup()
    })

    it('should render the component', () =>{
        const component = render(<About />)
        expect(component).toMatchSnapshot();
    })

    it('should render the Community Feed', () => {
        const { container } = render(<About />);
        const feedHeader = getByTestId(container, 'feed-header')
        expect(feedHeader).toBeInTheDocument();
    })

})