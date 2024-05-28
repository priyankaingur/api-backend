const baseUrl = (process.env.NODE_ENV === 'development') ? "http://localhost:3001" : ""
const LOGS = `${baseUrl}/api/logs`;
const INVALID_LOGS = `${baseUrl}/api/logs/errors`;
const LOGIN = `${baseUrl}/api/login`;
const POPULAR_LEVELS = `${baseUrl}/api/logs/popular-levels`;
const LONGEST_LEVELS = `${baseUrl}/api/logs/longest-levels`;
const AVERAGE_GAME_SESSION = `${baseUrl}/api/logs/average-gamesession`;
const COMMON_ERRORS = `${baseUrl}/api/logs/common-errors`;

export default { LOGS, INVALID_LOGS, LOGIN, POPULAR_LEVELS, LONGEST_LEVELS, AVERAGE_GAME_SESSION, COMMON_ERRORS };