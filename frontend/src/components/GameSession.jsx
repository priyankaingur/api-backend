import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import LevelSession from "./LevelSession";
import getDuration from "../utility/Duration.js";


const GameSession = ({ game, gameClick ,isValid}) => {
    const gameSessionClick = (game) => {
        gameClick(game);
    }
    const startAndEndTime = (game) => {
        return (
            <Row className="mx-3">
                <Col md="3">Started At:<b> {game.startTime} </b></Col>
                <Col md="3">Ended At:<b> {game.endTime} </b> </Col>
            </Row>);
    };
    const levelsAttempted = (game) => {
        return (
            game && game.levelSessions.length
        )
    }
    const displayDetails = (game) => {
        return (<>
            {startAndEndTime(game)}
            {game.levelSessions && game.levelSessions.map(level => <LevelSession level={level} key={level.levelSessionId} collapsed={1}></LevelSession>)}
        </>);
    };
    return (<Container fluid>
        <Row key={game.gameSessionId} className="playthrough mx-1"
            onClick={() => {
                gameSessionClick(game);
            }}>
            <Col md="4">Game session Id: <b>{game.gameSessionId} </b></Col>
            <Col md="2">Levels Attempted: <b>{levelsAttempted(game)}</b></Col>
            {isValid && <Col md="4">Total
                Duration: {getDuration(game.startTime, game.endTime)}
            </Col> }       </Row>
        <Row style={{ marginBottom: '10px' }} className="json mx-1">{game.selected && displayDetails(game)}</Row>
    </Container>)
}
export default GameSession;