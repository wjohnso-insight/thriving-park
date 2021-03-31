/*
    ! `useViewport` is a custom hook that uses `useMediaQuery` and the breakpoints defined for the application to return a string that represents the current size of the viewport

    TODO: [√] get window size from `useMediaQuery` 
    TODO: [√] match to the application's defined breakpoints
    TODO: [√] return the resulting string from that match

*/
//@flow

import { useEffect } from 'react';
import breakpoints from '../utils/breakpoints';
import useMediaQuery from './useMediaQuery'

export default function useViewport(debug? : boolean) : string{

    const breakpointVals : any[] = Object.values(breakpoints);
    const breakpointNames : any[] = Object.keys(breakpoints);  

    const viewport : string = useMediaQuery(
        breakpointVals,
        breakpointNames,
        'mobile'
    )

    useEffect(()  =>{
        if(debug){
            console.log(viewport)
        }
    },[viewport, debug])
    
    return viewport;
}
