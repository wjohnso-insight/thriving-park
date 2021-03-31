import React from 'react'
import GrafLogo from './GrafLogo'
import { render } from '@testing-library/react'

describe('describes the GrafLogo component', () =>{
    
    it('should render the component', () =>{
        const component = render(<GrafLogo />)
        expect(component).toMatchSnapshot();
    })
    
})