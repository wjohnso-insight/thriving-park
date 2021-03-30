//@flow
import * as React from 'react'

import './GrafLogo.scoped.scss'
type Props = {

}

export default function GrafLogo(props: Props) : React.Node {
    return (
        <div id="graflogo-wrapper">
            <h1 id="sign">Driving Park</h1>
            <span id="graf">THRIVING</span>
        </div>
    )
}