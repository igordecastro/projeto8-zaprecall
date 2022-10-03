import styled from "styled-components"

let answer = ""
let answered = []

function Answer({ cards, setCards, count, setCount, index }, answer){
    for(let i  = 0; i < cards.length; i++){
        if(cards[i].isTurned) {
            index = i;
        }
    }
    if(!answered.includes(index)) {
        setCards([...cards], cards[index].response = answer, cards[index].isTurned = false)
        setCount(count + 1)}
        answered.push(index)
}

export default function Footer({ count, setCount, cards, setCards }) {

    return (
        <StyledFooter>
            <div>
                <ResponseButton onClick={() => Answer(cards = {count, setCount, cards, setCards}, answer = "wrong")} color="#FF3030">Não lembrei</ResponseButton>
                <ResponseButton onClick={() => Answer(cards = {count, setCount, cards, setCards}, answer = "correct")} color="#2FBE34">Zap!</ResponseButton>
                <ResponseButton onClick={() => Answer(cards = {count, setCount, cards, setCards}, answer = "almost")} color="#FF922E">Quase não lembrei</ResponseButton>
            </div>
            {count}/{cards.length} CONCLUÍDOS
        </StyledFooter>

    )
}

const StyledFooter = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
    div {
        display: flex;
        width: 80%;
        justify-content: space-between;
        margin: 20px;
    }
`
const ResponseButton = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    background: ${props => props.color};
    border-radius: 5px;
    border: 1px solid ${props => props.color};
    padding:5px;
`