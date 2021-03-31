/*
    ! `useViewport` is a custom hook that uses `useMediaQuery` and the breakpoints defined for the application to return a string that represents the current size of the viewport

    TODO: [√] refactor to arrow function
    TODO: [√] refactor to Object.entries w/ destructuring
    TODO: [√] remove redundant typing on `viewport` constant

*/
//@flow

import { useEffect } from 'react';
import breakpoints from '../utils/breakpoints';
import useMediaQuery from './useMediaQuery'

const useViewport = (debug? : boolean) : string =>{

    const [ values, queries ] = Object.entries(breakpoints);
    const viewport = useMediaQuery(
        queries,
        values,
        "mobile"
    )
    // debugger;

    useEffect(()  =>{
        if(debug){
            console.log(viewport)
        }
    },[viewport, debug])
    
    if(typeof viewport === 'string'){
        return viewport 
    }
    else{
        return 'mobile'
    };
}

export default useViewport
