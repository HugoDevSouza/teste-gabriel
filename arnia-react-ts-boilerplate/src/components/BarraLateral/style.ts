import styled from "styled-components";

const ContainerLateral = styled.div `


background: #00995D;
height: 100vh;
width: 76px;
`

const Image = styled.img `
    padding-top: 1em;
    cursor: pointer;
`

const Content = styled.div  `
padding-top: 1em;
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5em;
    
`

export default {
    ContainerLateral,
    Image,
    Content
} 
    