//@flow
import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import About from './components/about/About'
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
        <Router>
            <nav>
                <Link to="/">About</Link>
                <Link to="/move">Move</Link>
                <Link to="/litter">Litter</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route path="/move" component={Move} />
                <Route path="/litter">
                    <Litter />
                </Route>
            </Switch>
        </Router>
    )
}

