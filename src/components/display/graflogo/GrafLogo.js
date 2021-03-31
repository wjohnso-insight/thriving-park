//@flow
import * as React from 'react'

import './GrafLogo.scoped.scss'
type Props = {
    viewport: string,
}

export default function GrafLogo(props: Props) : React.Node {
    
    const { viewport } = props;

    return (
        <div id="graflogo-wrapper">
            <h1 id="sign">Driving Park</h1>
            <span className={`${viewport}`} id="graf">THRIVING</span>
        </div>
    )
}