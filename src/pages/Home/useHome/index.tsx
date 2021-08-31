import React, { createContext, useContext, useEffect, useState } from 'react'
import {Beer, HomeContextValue} from "./models";
import { uuid } from "uuidv4"
import {getBeers, saveBeer} from "../services/beers";

const HomeContext = createContext<HomeContextValue>({} as HomeContextValue);

export const HomeProvider: React.FC = ({ children }) => {
    const [beers, setBeers] = useState<Beer[]>([])

    useEffect(() => {
        getBeers().then(data => {
            setBeers(data.beers)
        })
    }, [])

    async function addBeer(beer: Omit<Beer, 'id'>) {
        const newBeer: Beer = { ...beer, id: uuid()}
        await saveBeer(newBeer)
        setBeers([ ...beers, newBeer ])
    }

    return (
        <HomeContext.Provider value={{ beers, addBeer }}>
            { children }
        </HomeContext.Provider>
    )
}

export default function useHome() {
    const context = useContext(HomeContext)
    if (!context) {
        throw new Error("useHome should be wrapped in HomeProvider")
    }

    return context
}