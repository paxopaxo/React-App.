import { useFetchGifs } from "../../hooks/useFetchGifs"
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas con el Hook useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', () => {
        
        const { result } = renderHook( () => useFetchGifs( 'One Punch' ) )
        
        const { data, loading } = result.current 

        // const { data, loading } = useFetchGifs( 'One Punch' ) 

        // console.log( data ) 
        // console.log( loading ) 

        expect( data ).toEqual( [] )
        expect( loading ).toBe( true )
    })
    

})
