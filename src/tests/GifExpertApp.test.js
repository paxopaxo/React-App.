import React from 'react'


import { shallow } from "enzyme"
import { GifExpertApp } from "../GifExpertApp"
import { expressionStatement } from '@babel/types'

describe('Pruebas en GifExpertApp ', () => {

    test('Debe mostrarse correctamente', () => {
        
        const wrapper = shallow( <GifExpertApp/> )

        expect(wrapper).toMatchSnapshot()
    })
    
    test('debe mostrar una lista de categorias', () => {
        
        const categories = ['One Punch', 'Dragon Ball']
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/>)

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GrifGrid').length ).toBe( categories.length )

    })
    

})
