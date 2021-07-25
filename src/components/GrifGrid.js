import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

import PropTypes from 'prop-types'

export const GrifGrid = ({ category }) => {

    const { loading, data:images } = useFetchGifs( category )    

    return (
        <>
            <h3> { category }</h3>
            { loading && <p>Cargando.... </p> }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            // img={ img }
                            { ...img }
                        />
                    ))
                }
            </div>
        </>
    )
}
GrifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
