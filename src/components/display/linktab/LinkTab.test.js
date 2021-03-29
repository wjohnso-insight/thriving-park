import React from 'react'
import LinkTab from './LinkTab'
import { render } from '@testing-library/react'

describe('LinkTab Component', () => {

    // it('renders the component', () => { //! SNAPSHOT TEST
    //     const container = render(<LinkTab />)
    //     expect(container).toMatchSnapshot();
    // })

    it('renders its child component', () => {
        const { getByText } = render(
            <LinkTab>
                <span>
                    Child
                </span>
            </LinkTab>
        )
        expect(getByText('Child')).toBeTruthy()
    })
})