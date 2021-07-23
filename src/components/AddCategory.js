import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('') // Ponerlo como string vacío para que no vaya undefined en el return
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ( inputValue.trim().length > 2 ) {

            setCategories( cats => [ inputValue, ...cats ] )
            setInputValue('')
            console.log( inputValue )
        }

    }

    return (
        <form onSubmit = { handleSubmit }>
            <input
                type  = "text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}