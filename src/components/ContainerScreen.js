import { useState } from "react"
import styled from "styled-components"
import Deck from "./Deck"
import Footer from "./Footer"
import Logo from "./Logo"
import CARDS from "./mock"

export default function ContainerScreen() {
    const [cards, setCards] = useState(CARDS);
    const [count, setCount] = useState(0);

    return (
        <Screen>
            <Logo />
            <Deck cards={cards} setCards={setCards}/>
            <Footer count= {count} setCount={setCount} cards={cards} setCards={setCards} />
        </Screen>
    )
}

const Screen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`