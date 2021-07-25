import { shallow } from 'enzyme';
import React from 'react'
import { AddCategory  } from "../../components/AddCategory";

describe('Pruebas en AddCategory', () => {
    // const setCategories = () => {}
    
    const setCategories = jest.fn()

    let wrapper = shallow( <AddCategory setCategories={ setCategories }/>)

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategories={ setCategories }/>)
    })


    test( 'Debe mostrarse correctamente', () => {
        
        const input = wrapper.find('input')

        const value = 'Hola Compare'

        // input.simulate('click') // Simula el evento Click
        input.simulate('change', { target: { value }}) // Sin el OnClick o OnChange

        expect( wrapper.find('p').text().trim() ).toBe( value )

    })

    test('No debe de postear la información con Submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault: () => {} } )

        expect( setCategories ).not.toHaveBeenCalled()

    })

    test( 'Debe de llamar el setCategory y limpiar la caja de texto', () => {

        // Simular el inputChange
        // Simular el Submit
        // SetCAtegories debe ser llamado
        // El valor del imput debe estar ''

        const value = 'Nicolas Aburto'
        
        wrapper.find('input').simulate('change', { target: { value } } )
        expect( wrapper.find('p').text().trim() ).toBe( value )

        wrapper.find('form').simulate('submit', { preventDefault: () => {} } )
        
        expect( setCategories ).toHaveBeenCalled()
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) )
        expect( setCategories ).toHaveBeenCalledTimes(1)


        expect( wrapper.find('input').prop('value')  ).toBe( '' )
    

    })



})