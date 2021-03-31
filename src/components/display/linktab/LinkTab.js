/*
    * This component should
        [√] Accept a child React Router <Link>
        [√] Display the text of the <Link> in all caps
        [√] Be styled like a folder tab
            - border radius
            - drop shadow
        [√] Style if active
        [√] Make tab display responsive
        [] Refactor to not look like a tab
*/
//@flow
import * as React from 'react'
import useViewport from '../../../hooks/useViewport'

import './LinkTab.scoped.scss'

type Props = {
    children?: React.Node,
}

export default function LinkTab(props: Props) : React.Node {

    const viewport = useViewport();
    
    return (
        <section className={`${viewport}`} id="linktab-wrapper">
            <span>{props.children}</span>
        </section>
    )
}