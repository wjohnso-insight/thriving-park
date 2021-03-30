/*
    * This component should
        [√] Accept a child React Router <Link>
        [√] Display the text of the <Link> in all caps
        [√] Be styled like a folder tab
            - border radius
            - drop shadow
        [√] Style if active
        [] Make tab display responsive
 */
//@flow
import * as React from 'react'
import breakpoints from '../../../utils/breakpoints'
import useMediaQuery from '../../../hooks/useMediaQuery'

import './LinkTab.scoped.scss'

type Props = {
    children?: React.Node,
    path: string
}

export default function LinkTab(props: Props) : React.Node {

    const { desktop, laptop, tablet, mobile } = breakpoints;

    const viewport = useMediaQuery(
        [
            desktop,
            laptop,
            tablet,
            mobile
        ],
        ['desktop', 'laptop', 'tablet', 'mobile'],
        'mobile'
    )
    
    return (
        <section className={`${viewport}`} id="linktab-wrapper">
            <span>{props.children}</span>
        </section>
    )
}