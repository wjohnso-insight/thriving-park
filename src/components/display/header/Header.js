//@flow
import * as React from 'react'
import { Link } from "react-router-dom"
import "./Header.scoped.scss"

type Props = {

}

export default function Header(props: Props) : React.Node {
    return (
        <section id="header-wrapper">
            <section>
                <h1>
                    Driving Park
                </h1>
            </section>
            <nav id="header-nav">
                <Link to="/">ABOUT</Link>
                <Link to="/move">MOVE</Link>
                <Link to="/litter">LITTER</Link>
            </nav>
        </section>
    )
}