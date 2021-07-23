import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GrifGrid } from './components/GrifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState( ['One Punch', 'Samurai X', 'Dragon Ball'] )
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />
            <ol>
                {
                    categories.map( category => ( // () retorna implicitamente
                        <GrifGrid
                            category={category} 
                            key={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}
