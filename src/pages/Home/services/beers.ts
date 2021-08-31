import {api} from "../../../utils/api";

type Beer = {
    id: string;
    name: string;
}

type GetBeersResponse = {
    beers: Beer[]
}

export const getBeers = async () => {
    try {
        const { data } = await api.get<GetBeersResponse>('/beers')
        return data
    } catch (err) {
        console.error(err)
        throw err
    }
}

export const saveBeer = async (beer: Beer) => {
    try {
        const { data } = await api.post('/beers', { beer })
        return data
    } catch (err) {
        console.error(err)
        throw err
    }
}