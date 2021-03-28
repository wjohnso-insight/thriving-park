import React from 'react'
import Header from './Header'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

it('renders the component', () =>{
    const container = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    // container.debug()
    expect(container).toMatchSnapshot()    
})

it('renders Driving Park test', () =>{
    const { getByText } = render(
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
    expect(getByText("Driving Park")).toBeInTheDocument();
})

