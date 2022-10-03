import ClosedCard from "./ClosedCard"
import OpenCard from "./OpenCard"

export default function Deck({ cards, setCards}) {

    return (<>
        {cards.map((c, i) => 
        c.isTurned ?
            <OpenCard key={i} card={c} />
            :
            <ClosedCard key={i} index={i} cards={cards} setCards={setCards} />)}
    </>)
}