import { Column, Row } from "./Game";
import SmallBoard from "./SmallBoard";

const BigBoard = () => {
    return (
    <Column gap={0}>
        <Row gap={0}>
            <SmallBoard />
            <SmallBoard />
            <SmallBoard />
        </Row>
        <Row gap={0}>
            <SmallBoard />
            <SmallBoard />
            <SmallBoard />
        </Row>
        <Row gap={0}>
            <SmallBoard />
            <SmallBoard />
            <SmallBoard />
        </Row>
    </Column>);
}

export default BigBoard;