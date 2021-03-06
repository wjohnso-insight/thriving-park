//@flow
import * as React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"

import Header from './components/display/header/Header'
import About from './components/about/About'

import useViewport from '../src/hooks/useViewport';

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

    useViewport();

    return (
        <Router id="layout-router" data-testid="router">
            <Header />
                <section id="main-content">
                    <Switch>
                        <Route exact path="/" component={About}/>
                        <Route path="/move" component={Move} />
                        <Route path="/litter">
                            <Litter />
                        </Route>
                    </Switch>
                </section>
        </Router>
    )
}

