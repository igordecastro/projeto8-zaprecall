import play from "../img/seta_play.png"
import almost from "../img/icone_quase.png"
import wrong from "../img/icone_erro.png"
import correct from "../img/icone_certo.png"
import styled from "styled-components"

function colorAnswer(cards, index) {
    if (cards[index].response === "wrong") {
        return "#FF3030"
    } else if (cards[index].response === "almost") {
        return "#FF922E"
    } else if (cards[index].response === "correct") {
        return "#2FBE34"
    }
}

function iconAnswer(cards, index) {
    if (cards[index].response === "wrong") {
        return wrong
    } else if (cards[index].response === "almost") {
        return almost
    } else if (cards[index].response === "correct") {
        return correct
    } else return play
}

export default function ClosedCard({ index, cards, setCards }) {
    const newDeck = [...cards]

    return (
        <ClosedQuestion>
            <Title
                answer={cards[index].response !== undefined
                    ?
                    "line-through"
                    :
                    "none"
                }
                lineColor={() => colorAnswer(cards, index)}
            >
                Pergunta {index + 1}
            </Title>
            <img src={iconAnswer(cards, index)} alt="play button / icon" onClick={() => setCards(newDeck, newDeck[index].isTurned = true)} />
        </ClosedQuestion>
    )
}

const ClosedQuestion = styled.div`
width: 300px;
height: 35px;
background-color: #FFFFFF;
margin: 12px;
padding: 15px;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: flex;
align-items: center;
justify-content: space-between;
`
const Title = styled.p`
      font-family: 'Recursive';
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      color: ${props => props.lineColor};
      text-decoration: ${props => props.answer};
`