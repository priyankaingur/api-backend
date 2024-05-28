const log = {
    "metricsList": [
        {
            "TimeStamp": "3/1/2024 11:55:17 AM",
            "UserInteraction": "levelName:staircase.json"
        },
        {
            "TimeStamp": "3/1/2024 11:55:18 AM",
            "UserInteraction": "category:MovementCommandPaletteButton"
        },
        {
            "TimeStamp": "3/1/2024 11:55:18 AM",
            "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
        }
    ]
};

const incorrectLog = {
    "metricsLists": [
        {
            "TimeStamp": "3/1/2024 11:55:17 AM",
            "UserInteraction": "levelName:default_level.json"
        },]
};

const errorLog = {
    "token": "TEST-XYZ",
    "metricsList": [
        {
            "TimeStamp": "3/20/2024 11:53:05 AM",
            "UserInteraction": "levelName:1_Play Button.json"
        },
        {
            "TimeStamp": "3/18/2024 11:53:06 AM",
            "UserInteraction": "CloseWindow"
        },
        {
            "TimeStamp": "3/18/2024 11:53:06 AM",
            "UserInteraction": "Play"
        },
        {
            "TimeStamp": "3/18/2024 11:53:06 AM",
            "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
        },
        {
            "TimeStamp": "3/18/2024 11:53:08 AM",
            "UserInteraction": "win: Level Play Button Completed"
        },
        {
            "TimeStamp": "3/18/2024 11:53:08 AM",
            "UserInteraction": "Stop"
        }]
};

const levels = [{
    levelName: "default_level.json",
    userInteractions: [{
        "timeStamp": "2/23/2023 11:47:20 AM",
        "action": "MovementCommandPaletteButton",
    },
    {
        "command": {
            "move": "MOVE_FORWARD",
            "leftChild": "END_OF_BRANCH",
            "rightChild": "END_OF_BRANCH",
            "parent": "MOVE_FORWARD",
            "parentAlt": "null",
            "isRemovable": true,
            "isSlot": false
        },
        "timeStamp": "2/23/2023 11:47:22 AM",
        "action": "Move",
    },]
},
{
    levelName: "staircase.json",
    userInteractions: [{
        "timeStamp": "3/1/2024 11:55:18 AM",
        "action": "MovementCommandPaletteButton",
    },]
}];

const errorLevels = [
    {
        levelName: "staircase.json",
        userInteractions: [{
            "TimeStamp": "3/20/2024 11:53:11 AM",
            "UserInteraction": "Play"
        },
        {
            "TimeStamp": "3/18/2024 11:53:11 AM",
            "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
        },
        {
            "TimeStamp": "3/18/2024 11:53:12 AM",
            "UserInteraction": "win: Level Play Button Completed"
        },
        {
            "TimeStamp": "3/18/2024 11:53:12 AM",
            "UserInteraction": "Stop"
        }]
    },
    {
        levelName: "default_level.json",
        userInteractions: [{
            "TimeStamp": "3/20/2024 11:53:06 AM",
            "UserInteraction": "CloseWindow"
        },
        {
            "TimeStamp": "3/18/2024 11:53:06 AM",
            "UserInteraction": "Play"
        },
        {
            "TimeStamp": "3/18/2024 11:53:06 AM",
            "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
        },
        {
            "TimeStamp": "3/18/2024 11:53:08 AM",
            "UserInteraction": "win: Level Play Button Completed"
        },
        {
            "TimeStamp": "3/18/2024 11:53:08 AM",
            "UserInteraction": "Stop"
        }]
    }
];

const games = [{
    startTime: "3/1/2025 11:55:17 AM",
    endTime: "3/1/2025 12:55:18 AM",
    levelSessions: []
}];

const errorGames = [{
    startTime: "3/20/2024 11:55:17 AM",
    endTime: "3/10/2024 12:55:18 AM",
    levelSessions: []
}];


module.exports = {
    log, incorrectLog, levels, games, errorLog, errorLevels, errorGames
};