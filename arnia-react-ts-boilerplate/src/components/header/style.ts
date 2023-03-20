import styled from "styled-components";

const Header = styled.header `
    display: flex;
    justify-content: space-between;
`

const ContainerHeader = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background: #FFFFFF;
    padding-left: 2em;
    padding-right: 4em;


    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

`

const ImagemContent = styled.div `
display: flex;
align-items: center;
justify-content: center;
width: 80px;
height: 80.75px;
background: #FFFFFF;
box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
`

export default {
    Header,
    ContainerHeader,
    ImagemContent
}