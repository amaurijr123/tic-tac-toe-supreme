import { Center } from "@chakra-ui/react";
import { styled } from "styled-components";

const StyledSquare = styled.button`
  width: 75px;
  height: 75px;
  border: 1px solid #999;
  padding: 0;
`;

const Square = () =>{
    return (
        <StyledSquare>
            X
        </StyledSquare>);
}

export default Square