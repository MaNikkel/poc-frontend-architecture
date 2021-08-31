export type Beer = {
    name: string;
    id: string;
}

type BeerInput = Omit<Beer, 'id'>

export interface HomeContextValue {
    beers: Beer[]
    addBeer: (beer: BeerInput) => void
}