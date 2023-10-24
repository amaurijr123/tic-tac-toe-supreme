import React from "react";
import BigBoard from "./BigBoard";
import styled from "styled-components";
import { Center, ChakraProvider } from "@chakra-ui/react";

type LayoutProps = {
  gap: number;
};

export const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

export const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;

const Game = () => {
  return (
    <ChakraProvider>
      <Center margin={20}>
        <Row gap={50}>
          <BigBoard />
        </Row>
      </Center>
    </ChakraProvider>
  );
};

export default Game;
