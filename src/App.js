//@flow
import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import About from './components/about/About'
import TriconBadge from './components/display/TriconBadge'

import './App.scoped.scss'
type Props = {

}

function Move(){
    return <span>Move 1</span>
}

function Litter(){
    return <span>Litter 1</span>
}

export default function App(props: Props) : React.Node {
    return (
        <Router id="layout-router">
            <header className="layout">
                <aside className="logo">
                    <section>
                       <h1> Driving Park</h1>
                       <h2> Always on the move</h2>
                    </section>
                    <TriconBadge />  
                </aside>
                <nav>
                    <section className="links">
                        <div className="nav-item">
                            <Link to="/">ABOUT</Link>
                        </div>  
                        <div className="nav-item">
                            <Link to="/move">MOVE</Link>
                        </div>
                        <div className="nav-item">
                            <Link to="/litter">LITTER</Link>
                        </div>
                    </section>
                </nav>
            </header>
            <main>
                <Switch>
                    <Route exact path="/" component={About}/>
                    <Route path="/move" component={Move} />
                    <Route path="/litter">
                        <Litter />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

