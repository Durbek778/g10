import  StyledComponents, {css}  from "styled-components";
import styled from "styled-components";
import { ReactComponent as bed } from "./assets/icons/mail.svg";
import { ReactComponent as beth} from "./assets/icons/mail.svg";
import { ReactComponent as garage} from "./assets/icons/mail.svg";

const Icons = styled.div`
`
Icons.Bed = styled(bed)``;
Icons.Beth = styled(beth)``;
Icons.Garage = styled(garage)``;

const getSize = ({ size }) => {
  switch (size) {
    case 'small': return '150px'
    case 'medium': return '200px'
    case 'large': return '250px'
    default: return '200px'
  }
}

const Container = styled.div`
display: flex;
align-items: center;

  height: fit-content;
  background-color: yellow;
  .title {
    color: blue;
  }
`;

const Title = StyledComponents.h1`
 color: red;
`
const Box = styled.div`
display: flex;
justify-content: center;
align-items: center;

width: ${getSize};
height:  ${getSize};
box-shadow: 1px 2px 2px solid black;
border: 2px solid red;
margin: 20px;
`
const common = css`
width: 200px;
height: 44px;
border-radius: 8px;
border: 1px solid red;
`

const Input = styled('input')`
${common}
border: 1px solid coral

`
const ErrorIN = styled(Input)`
${common}
border: 1px solid green 
`;

export {Container, Title, Box, Input, ErrorIN, Icons}