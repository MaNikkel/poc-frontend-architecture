import React from "react";
import useHome from "../../../useHome";

const BeerList: React.FC = () => {
    const { beers } = useHome()

    return (
        <ul>
            { beers.map(beer => (
                <li key={beer.id}>{beer.name}</li>
            )) }
        </ul>
    )
}

export default BeerList