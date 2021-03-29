//@flow
import * as React from 'react'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { Link } from "react-router-dom"
import "./Header.scoped.scss"

import breakpoints from '../../../utils/breakpoints'

import LinkTab from '../linktab/LinkTab'

type Props = {

}

export default function Header(props: Props) : React.Node {
    
    let { desktop, laptop, tablet, mobile } = breakpoints;

    const viewport = useMediaQuery(
        [
            desktop,
            laptop,
            tablet,
            mobile
        ],
        ['desktop','laptop','tablet','mobile'],
        'mobile'
    )
    
    return (
        <section className={`${viewport}`} id="header-wrapper">
            <section className={`${viewport}`} id="header-logo">
                <h1 className={`${viewport}`}>
                    Driving Park
                </h1>
            </section>
            <nav className={`${viewport}`} id="header-nav">
                <LinkTab>
                    <Link to="/">About</Link>
                </LinkTab>
                <LinkTab>
                    <Link to="/move">Move</Link>
                </LinkTab>
                <LinkTab>
                    <Link to="/litter">Litter</Link>
                </LinkTab>
            </nav>
        </section>
    )
}