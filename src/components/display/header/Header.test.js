import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

window.matchMedia = window.matchMedia || function() {
    return {
        matches: false,
        addListener: function() {},
        removeListener: function() {}
    };
};

it('renders the component', () =>{
    const container = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    // container.debug()
    expect(container).toMatchSnapshot()    
})

it('renders Driving Park', () =>{
    const { getByText } = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    expect(getByText("Driving Park")).toBeInTheDocument();
})

it('renders the active link differently', () =>{
    
    const { getByText } = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    expect(getByText('about')).toHaveAttribute('class', 'active')
})

