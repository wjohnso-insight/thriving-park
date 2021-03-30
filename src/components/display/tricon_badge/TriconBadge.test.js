import React from 'react'
import TriconBadge from './TriconBadge'
import { render } from '@testing-library/react'

describe('Tricon Badge', () =>{

    it('should load the component', () =>{
        const container = render(<TriconBadge />);
        expect(container).toMatchSnapshot();
    })
})