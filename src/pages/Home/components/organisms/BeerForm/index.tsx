import React, { useRef } from "react";
import Input from "../../../../../components/molecules/Input";
import Button from "../../../../../components/atoms/Button";
import useHome from "../../../useHome";

const BeerForm: React.FC = () => {
    const beerInput = useRef<HTMLInputElement>(null)
    const { addBeer } = useHome()

    function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (beerInput?.current?.value) {
            addBeer({ name: beerInput?.current?.value })
        } else {
            console.error("Algo deu errado")
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <Input type="text" id="beer" label="Beer" name="beer" ref={beerInput}/>
            <Button type="submit">
                Enviar
            </Button>
        </form>
    )
}

export default BeerForm