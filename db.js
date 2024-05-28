const db_data = require("./data/Mock_DB_Data");
const GameSessionService = require("./services/GameSessionService");
const JsonConverter = require("./data-transformations/JsonConverter");
const GameSession = require("./models/GameSession");
const LevelSession = require("./models/LevelSession");
require("./app");

const insertData = async () => {
    return new Promise(() => {
        let counter = 0;
        db_data.forEach(async (json) => {
            const convertedJson = await JsonConverter(json);
            await GameSessionService.saveGameSession({
                request: json,
                convertedJson,
                response: null,
                gameSchema: GameSession,
                levelSchema: LevelSession
            });
            counter++;
            if(counter === db_data.length-1) finishSuccessfully();
        });
    });
};

const finishSuccessfully = () => {
    console.log("Script Executed Successfully!");
    process.exit(0);
};
insertData();
