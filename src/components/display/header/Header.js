//@flow
import * as React from 'react'
import useViewport from '../../../hooks/useViewport'

import { Link, useLocation } from 'react-router-dom'
import cx from 'classnames'

import "./Header.scoped.scss"

import { Navoption, navoptions } from '../../../utils/navoptions'

import LinkTab from '../linktab/LinkTab'
import TriconBadge from '../tricon_badge/TriconBadge'
import GrafLogo from '../graflogo/GrafLogo'

type Props = {

}

export default function Header(props: Props) : React.Node {
    
    const { pathname } = useLocation();
    const [ activePath, setActivePath ] = React.useState('/');

    React.useEffect(() => {
        setActivePath(pathname)
    },[pathname])

    const viewport = useViewport();

    const RenderedLinkTabs = () => (
        navoptions.map((navoption : Navoption) => {
            const { path, markdownVal } = navoption;
            const isActive = (path === activePath ? true : false);

            const linkClasses = cx({
                active : isActive
            })

            return(
                <LinkTab key={markdownVal}>
                    <Link 
                        className={linkClasses}
                        to={`${path}`}
                        >
                        {markdownVal}
                    </Link>
                </LinkTab>
            )              
        })
    )
    
    return (
        <section className={`${viewport}`} id="header-wrapper">
            <section className={`${viewport}`} id="header-logo">
                <div id="texts-wrapper">
                    <GrafLogo viewport={viewport} />
                    <h4 className={`${viewport}`}>Always on the move</h4>
                </div>
                <div className={`${viewport}`} id="icon-wrapper">
                    <TriconBadge />
                </div>
            </section>
            <nav className={`${viewport}`} id="header-nav">
                {RenderedLinkTabs()}
            </nav>
        </section>
    )
}