import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('') // Ponerlo como string vacío para que no vaya undefined en el return
    
    const handleInputChange = (e) => {
        setInputValue( e.target.value )
        console.log('HandeInputChange ejecutado')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ( inputValue.trim().length > 2 ) {

            setCategories( cats => [ inputValue, ...cats ] )
            setInputValue('')
            console.log( 'Input value: \n >>>  ', inputValue )
        }

    }

    return (
        <form onSubmit = { handleSubmit }>
            <p> { inputValue }</p>
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