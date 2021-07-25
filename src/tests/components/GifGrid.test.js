import { shallow } from 'enzyme'
import '@testing-library/jest-dom'
import React, { PureComponent } from 'react'
import { GrifGrid } from '../../components/GrifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en el <GifGrid />', () => {

    const category = 'One Punch'

    test('debe mostrarse correctamente', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GrifGrid category= { category }/> )
        expect( wrapper ).toMatchSnapshot()

    })

    test('debe mostrar items cuando se cargan las imagenes useFetch', () => {

        const gifs = [{
            id: 'abdc',
            url:'https://localhost/caca.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })

        const wrapper = shallow( <GrifGrid  category={ category } /> )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists() ).toBe( false )
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
        
    })
    



})