import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
display: flex;
justify-content: center;
align-items: center;
;
`
export const ContainerItens = styled.div`
width: 500px;
background-color: #fff;
min-height: 50%;
padding: 30px;
`
export const Input = styled.input`
width: 300px;
height: 40px;
padding: 5px;
border: 2px solid #D1D3D4;
border-radius: 5px;
outline: none;
margin-right: 10px;
`
export const TodoList = styled.ul`
display: flex;
flex-direction: column;
padding: 30px;
align-items: center;

li {
    list-style: none;
}
`
export const ListItem = styled.div`
width: 440px;
background: ${props => props.isFinished ? '#E8FF8B': '#E4E4E4'};
padding: 30px;
height: 60px;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 5px;
margin-top: 20px;
box-shadow: 1px 4px 10px 0px #00000033;


img {
    width: 20px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    &:hover {
        transform: scale(1.5) translateY(-2px)
    }
}
`