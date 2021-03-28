//@flow
import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarSide, faHorse, faPlane } from '@fortawesome/free-solid-svg-icons'

import "./TriconBadge.scoped.scss"

type Props = {

}

export default function TriconBadge(props: Props) : React.Node {
    return (
        <div className="layout">
            <div className="icon" id="icon-one" >
                <FontAwesomeIcon icon={faCarSide} size={'2x'} /> 
           </div>
           <div className="icon" id="icon-two">
                <FontAwesomeIcon icon={faHorse} size={'2x'} /> 
           </div>
           <div className="icon" id="icon-three">
                <FontAwesomeIcon icon={faPlane} size={'2x'} /> 
           </div>
        </div>
    )
}