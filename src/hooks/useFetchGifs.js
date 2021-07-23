import { useState, useEffect } from 'react';
import { getGif } from "../helpers/getGif"

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect( () => {
        getGif( category )
            .then( imgs => {

                setTimeout( () => {
                    console.log('aburto')

                    setState({
                        data: imgs,
                        loading: false
                    } )

                }, 3000 )
            })

    }, [category])


    return state 
}