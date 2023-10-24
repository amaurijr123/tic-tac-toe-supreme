import { styled } from "styled-components";
import { Column, Row } from "./Game";
import Square from "./Square";
import { Box, Center } from "@chakra-ui/react";

const StyledMiniBoard = styled.button`
  width: 300px;
  height: 300px;
  border: 1px solid #999;
  padding: 0;
  margin: auto;
`;

const SmallBoard = () => {
  return (
    <Box w={300} h={300} border={1} borderColor={"black"} padding={0} margin={"auto"}>
      <Center>
        <Column gap={0}>
          <Row gap={0}>
            <Square />
            <Square />
            <Square />
          </Row>
          <Row gap={0}>
            <Square />
            <Square />
            <Square />
          </Row>
          <Row gap={0}>
            <Square />
            <Square />
            <Square />
          </Row>
        </Column>
      </Center>
    </Box>
  );
};

export default SmallBoard;
