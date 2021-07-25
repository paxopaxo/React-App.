import { getGif } from "../../helpers/getGif"

describe( 'Pruebas con getGifs Fetch', async() => {

    test( 'Debe tener al menos 10 elementos', async() => {
        const gifs = await getGif('One Punch')

        expect( gifs.length ).toBe( 10 )

    })



})