import styled from "styled-components";

const Container = styled.button`
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    outline: none;
    background: rgb(37, 184, 100);
    color: white;
    font-size: 1.1rem;
    border: none;
    cursor: pointer;
    transition: all 0.2s;
    :active {
        background: #16914f;
    }
`

const RegisterButton = props => {
    return (
        <Container onClick={props.onClick}>快速注册</Container>
    )
}

export {
    RegisterButton
}