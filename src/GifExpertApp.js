import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GrifGrid } from './components/GrifGrid'

export const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState( defaultCategories )
    
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
