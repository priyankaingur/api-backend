import { useEffect, useState } from 'react';
import { Col, Row, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import GameSession from './GameSession';
import Localization from "../utility/Localization";
import Form from "react-bootstrap/Form";
import { useDispatch } from 'react-redux';
import { setFilteredLogs } from "../Redux/logsReducer.js";
import Pagination from 'react-bootstrap/Pagination';
import { useSelector } from "react-redux";
import GameConstants from '../utility/constants/GameConstants.js';
const DisplayLogs = ({ data, type }) => {
    const [gameSessions, setGameSessions] = useState([]);
    const [searchText, setSearchText] = useState("");
    const isValid = type === "Valid";
    const dispatch = useDispatch();
    const [activePage, setActivePage] = useState(1);
    const itemsPerPage = GameConstants.ITEMS_PER_PAGE;
    let totalPages;
    const filteredLogs = useSelector((state) => state.logs.filteredLogs);
    useEffect(() => {
        setGameSessions(data);
        dispatch(setFilteredLogs(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])
    const gameClick = (game) => {
        const sessions = gameSessions.map(g => {
            if (g.gameSessionId === game.gameSessionId) {
                g.selected = !g.selected;
            } else {
                g.selected = false;
            }
            return g;
        })
        setGameSessions(sessions);
    }
    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };
    const renderPageItems = () => {
        const items = [];
        const sessionsLength = gameSessions.length;
        totalPages = Math.ceil(sessionsLength / itemsPerPage);
        if (sessionsLength > 0) {
            for (let number = 1; number <= totalPages; number++) {
                items.push(
                    <Pagination.Item key={number}
                        active={number === activePage}
                        onClick={() => handlePageChange(number)}>
                        {number}
                    </Pagination.Item>
                )
            }
        }
        return items;
    }
    const serarchGameSession = (event) => {
        const search = event.target.value;
        setActivePage(1);
        if (search.length) {
            const filteredSessions = data.filter(item =>
                item.gameSessionId.includes(search)
            );
            dispatch(setFilteredLogs(filteredSessions));
            setGameSessions(filteredSessions);
        } else {
            dispatch(setFilteredLogs(data));
            setGameSessions(data);
        }
    }
    const renderContent = () => {
        const startIndex = (activePage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, gameSessions.length);
        return gameSessions.filter((session, index) => index >= startIndex && index < endIndex).map((game) => (
            <GameSession style={{ position: 'relative' }}
                key={game.gameSessionId} game={game}
                gameClick={gameClick}
                isValid={isValid}></GameSession>
        ))
    };
    return (<Container fluid>
        <Row>
            <Col xs={8}>
                <h2 style={{ textAlign: 'center' }}>Logs</h2>
            </Col>
            <Col>
                <InputGroup size="sm" className="mb-3">
                    <Form.Control size="sm"
                        type="text"
                        value={searchText}
                        name="Search"
                        placeholder={Localization.SEARCH_BY_ID}
                        onChange={(e) => { setSearchText(e.target.value); serarchGameSession(e) }}
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                    />
                </InputGroup>
            </Col>
        </Row>
        <Row className="ms-2 mb-2">
           <em> {Localization.LOGS_TEXT} {filteredLogs.length} {Localization.SEARCH_CONNECTOR} {data.length} {Localization.FILTERED_LOGS} </em>
        </Row>
        {renderContent()}
        <Row>
            {data && data.length > 10 && <Col>
                <Pagination size="sm" className="justify-content-end" color='#545C81'>
                    <Pagination.First onClick={() => handlePageChange(1)}
                        disabled={activePage === 1} />
                    <Pagination.Prev onClick={() => handlePageChange(activePage - 1)}
                        disabled={activePage === 1} />
                    {renderPageItems()}
                    <Pagination.Next onClick={() => handlePageChange(activePage + 1)}
                        disabled={activePage === totalPages} />
                    <Pagination.Last onClick={() => handlePageChange(totalPages)}
                        disabled={activePage === totalPages} />
                </Pagination>
            </Col>}
        </Row>
    </Container>)
}
export default DisplayLogs;