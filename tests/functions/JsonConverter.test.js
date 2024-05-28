import convertJson from "../../data-transformations/JsonConverter";
const { level,category,multilevelCategory,command,error,win } = require("../data/JsonConverter.data.js");

function getLevelSessionByIndex(outputJson, index) {
    return outputJson.levelSessions[index];
}

function getLevelSessions(outputJson) {
    return {
        firstLevelSession: getLevelSessionByIndex(outputJson, 0),
        secondLevelSession: getLevelSessionByIndex(outputJson, 1)
    };
}

function getUserInteractionByIndex(levelIndex, userInteractionIndex, outputJson) {
    return getLevelSessionByIndex(outputJson, levelIndex).userInteractions[userInteractionIndex];
}

describe("Testing for data transformations from raw game log", () => {
    test("Converted empty json object should be undefined", () => {
        const outputJson = convertJson("{}");
        expect(outputJson).toBeUndefined();
    });
    test("Converted level name should be recorded in the first level session object", () => {
        const outputJson = convertJson(level);
        expect(outputJson.levelSessions).toBeDefined();
        const firstLevelSession = getLevelSessionByIndex(outputJson, 0);
        expect(firstLevelSession.levelName).toBe("my_level.json");

    });

    test("Converted level names should be recorded in the subsequent level session objects", () => {
        const outputJson = convertJson(level);
        expect(outputJson.levelSessions).toBeDefined();
        // There should be two level sessions with level names.
        const {
            firstLevelSession,
            secondLevelSession
        } = getLevelSessions(outputJson);
        expect(firstLevelSession.levelName).toBe("my_level.json");
        expect(secondLevelSession.levelName).toBe("default_level.json");

    });
    test("Converted category should be the initial user interaction in the first level session object", () => {
        const outputJson = convertJson(category);
        expect(outputJson.levelSessions).toBeDefined();
        // Category should be recorded at the first level as a first action.
        const firstLevelFirstUserInteraction = getUserInteractionByIndex(0, 0, outputJson);
        expect(firstLevelFirstUserInteraction.action).toBe("MovementCommandPaletteButton");
    });
    test("Converted categories should be recorded in the first level session object", () => {
        const outputJson = convertJson(category);
        expect(outputJson.levelSessions).toBeDefined();
        // Category should be recorded at the first level as a first and second action.
        const firstLevelFirstUserInteraction = getUserInteractionByIndex(0, 0, outputJson);
        const firstLevelSecondUserInteraction = getUserInteractionByIndex(0, 1, outputJson);
        expect(firstLevelFirstUserInteraction.action).toBe("MovementCommandPaletteButton");
        expect(firstLevelSecondUserInteraction.action).toBe("MarkerCommandPaletteButton");
    });

    test("Converted category should be recorded in the subsequent level session objects", () => {
        const outputJson = convertJson(multilevelCategory);
        expect(outputJson.levelSessions).toBeDefined();
        // Category should be recorded at each level.
        const firstLevelFirstUserInteraction = getUserInteractionByIndex(0, 0, outputJson);
        const secondLevelFirstUserInteraction = getUserInteractionByIndex(1, 0, outputJson);
        expect(firstLevelFirstUserInteraction.action).toBe("MovementCommandPaletteButton");
        expect(secondLevelFirstUserInteraction.action).toBe("MarkerCommandPaletteButton");
    });

    test("Converted command should be recorded in the first level session object", () => {
        const outputJson = convertJson(command);
        expect(outputJson.levelSessions).toBeDefined();
        // COMMAND should be recorded at the first level as a second action.
        const firstLevelFirstUserInteraction = getUserInteractionByIndex(0, 1, outputJson);
        expect(firstLevelFirstUserInteraction.action).toBe("Move");
        expect(firstLevelFirstUserInteraction.command.move).toBe("MOVE_FORWARD");
    });

    test("Converted command should be recorded in the subsequent level session objects", () => {
        const outputJson = convertJson(command);
        expect(outputJson.levelSessions).toBeDefined();
        // COMMAND should be recorded at the first level as a second action.
        const firstLevelSecondInteraction = getUserInteractionByIndex(0, 1, outputJson);
        expect(firstLevelSecondInteraction.action).toBe("Move");
        expect(firstLevelSecondInteraction.command.move).toBe("MOVE_FORWARD");
        // COMMAND should be recorded at the second level as a second action.
        const secondLevelSecondInteraction = getUserInteractionByIndex(1, 1, outputJson);
        expect(secondLevelSecondInteraction.action).toBe("Move");
        expect(secondLevelSecondInteraction.command.move).toBe("TURN_CLOCKWISE");
    });

    test("Converted error should be recorded in the first level session object", () => {
        const outputJson = convertJson(error);
        expect(outputJson.levelSessions).toBeDefined();
        // Error should be recorded at the first level as a first action.
        const firstLevelFirstInteraction = getUserInteractionByIndex(0, 0, outputJson);
        expect(firstLevelFirstInteraction.action).toBe("Error");
        expect(firstLevelFirstInteraction.msg).toBe("Maximum one command allowed");
    });


    test("Converted error should be recorded in the subsequent level session objects", () => {
        const outputJson = convertJson(error);
        expect(outputJson.levelSessions).toBeDefined();
        // Error should be recorded at the first level as a first action.
        const firstLevelFirstInteraction = getUserInteractionByIndex(0, 0, outputJson);
        expect(firstLevelFirstInteraction.action).toBe("Error");
        expect(firstLevelFirstInteraction.msg).toBe("Maximum one command allowed");
        // Error should be recorded at the second level as a first action.
        const secondLevelFirstInteraction = getUserInteractionByIndex(1, 0, outputJson);
        expect(secondLevelFirstInteraction.action).toBe("Error");
        expect(secondLevelFirstInteraction.msg).toBe("Attempts exceeded");
    });

    test("Converted win should be recorded in the first level session object.", () => {
        const outputJson = convertJson(win);
        expect(outputJson.levelSessions).toBeDefined();
        // win should be recorded at the first level as a fourth action.
        const firstLevelFourthInteraction = getUserInteractionByIndex(0, 3, outputJson);
        expect(firstLevelFourthInteraction.action).toBe("Win");
    });
    test("Converted win should be recorded in the subsequent level session objects", () => {
        const outputJson = convertJson(win);
        expect(outputJson.levelSessions).toBeDefined();
        // win should be recorded at the first level as a third action.
        const firstLevelFourthInteraction = getUserInteractionByIndex(0, 3, outputJson);
        expect(firstLevelFourthInteraction.action).toBe("Win");
        // win should be recorded at the second level as a third action.
        const secondLevelFourthInteraction = getUserInteractionByIndex(0, 3, outputJson);
        expect(secondLevelFourthInteraction.action).toBe("Win");

    });
});