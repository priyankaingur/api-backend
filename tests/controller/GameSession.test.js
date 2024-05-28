const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app.js");
const GameSession = require("../../models/GameSession.js");
const LevelSession = require("../../models/LevelSession.js");
const ErrorGameSession = require("../../models/ErrorGameSession.js");
const ErrorLevelSession = require("../../models/ErrorLevelSession.js");
const api = supertest(app);
const { log, incorrectLog, levels, games, errorLog, errorGames, errorLevels } = require("../data/GameSession.data.js");
let loginToken;
beforeAll(() => {
    api
        .post("/api/login")
        .send({
            "username": "test-user",
            "password": "test123"
        })
        .end(function (error, response) {
            if (error) {
                throw error;
            }
            loginToken = `Bearer ${response.body.token}`;
        });
});

const saveGame = async (gameSchema, levelSchema, games, levels) => {
    let gameObj = new gameSchema(games[0]);
    const levelList = await levelSchema.insertMany(levels);
    levelList.forEach(r => {
        gameObj.levelSessions = gameObj.levelSessions.concat(r._id);
    });
    await gameObj.save();
};

beforeEach(async () => {
    await GameSession.deleteMany({});
    await LevelSession.deleteMany({});
    saveGame(GameSession, LevelSession, games, levels);
    await ErrorGameSession.deleteMany({});
    await ErrorLevelSession.deleteMany({});
    saveGame(ErrorGameSession, ErrorLevelSession, errorGames, errorLevels);
});

describe("Testing GET method for logs", () => {
    test("API should return status 200 if json Logs are present in DB", async () => {
        await api
            .get("/api/logs")
            .set("Authorization", loginToken)
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });

    test("API should return correct length of records from DB", async () => {
        const response = await api.get("/api/logs").set("Authorization", loginToken);
        const levels = response.body[0].levelSessions;
        expect(response.body).toHaveLength(games.length);
        expect(levels).toHaveLength(levels.length);
    });

    test("API should have specific level within the returned logs", async () => {
        const response = await api.get("/api/logs").set("Authorization", loginToken);
        const levels = response.body[0].levelSessions;
        expect(levels[0].levelName).toBe("default_level.json");
    });
});

describe("Testing POST method for logs", () => {
    test("API should return status 201 if new log is stored sucessfully in DB as json", async () => {
        await api
            .post("/api/logs")
            .set("Authorization", loginToken)
            .send({ "token": "TEST-USER", ...log })
            .expect(201)
            .expect("Content-Type", /application\/json/);
        const response = await api.get("/api/logs").set("Authorization", loginToken);
        const levels = response.body[1].levelSessions;
        expect(response.body).toHaveLength(2);
        expect(levels[0].levelName).toBe("staircase.json");
    });

    test("API should return status 400 if Incorrect request json is passed as an input", async () => {
        await api
            .post("/api/logs")
            .set("Authorization", loginToken)
            .send(incorrectLog)
            .expect(400);
    });

    test("API should return status 400 if empty request body is passed as an input", async () => {
        await api
            .post("/api/logs")
            .set("Authorization", loginToken)
            .send()
            .expect(400);
    });
});

describe("Testing Error logs", () => {
    test("API should return status 201 and correct message if error log is stored sucessfully in DB as json", async () => {
        const newGame = await api
            .post("/api/logs")
            .set("Authorization", loginToken)
            .send(errorLog)
            .expect(201)
            .expect("Content-Type", /application\/json/);
        expect(newGame.body.msg).toBe("There were some errors in log JSON, saved successfully in error logs!");
        const response = await api.get("/api/logs/errors").set("Authorization", loginToken);
        const levels = response.body[1].levelSessions;
        expect(levels[0].levelName).toBe("1_Play Button.json");
    });

    test("Error API should return status 200 if error Logs are present in DB", async () => {
        await api
            .get("/api/logs/errors")
            .set("Authorization", loginToken)
            .expect(200)
            .expect("Content-Type", /application\/json/);
    });
});

afterAll(async () => {
    await mongoose.connection.close();
});