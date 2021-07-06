import React from "react";
import styled from "styled-components";


const Card = ({left,top,trTop,trLeft}) => {



    return(
        <Container left={50} top={50} trTop={trTop} trLeft={trLeft}></Container>
    )
}

export default Card;

export const Container = styled.div`
    position: absolute;
    position: fixed;
    width: 250px;
    height: 250px;
    background-color: red;
    top:${(props) => `${props.top}%`};
    left: ${(props) =>`${ props.left}%`};
    transform: ${(props) => `translate(${props.trLeft}%, ${props.trTop}%)`};
`;