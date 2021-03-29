/*
    * This component should
        [√] Accept a child React Router <Link>
        [√] Display the text of the <Link> in all caps
        [√] Be styled like a folder tab
            - border radius
            - drop shadow
        [] Style if active
 */
//@flow
import * as React from 'react'
import './LinkTab.scoped.scss'
type Props = {
    children?: React.Node
}

export default function LinkTab(props: Props) : React.Node {

    return (
        <section id="linktab-wrapper">
            <span>{props.children}</span>
        </section>
    )
}