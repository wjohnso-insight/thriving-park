import React from 'react'
import GrafLogo from './GrafLogo'
import { render } from '@testing-library/react'

describe(' test suite description', () =>{
    
    it('should render the component', () =>{
        const component = render(<GrafLogo />)
        expect(component).toMatchSnapshot();
    })
    
})