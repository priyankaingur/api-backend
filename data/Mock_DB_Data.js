const { format } = require("date-fns");
const today = new Date();

const previousDay = new Date(today);
previousDay.setDate(today.getDate() - 1);

const lastSevenDay = new Date(today);
lastSevenDay.setDate(today.getDate() - 7);

const lastthirtyDay = new Date(today);
lastthirtyDay.setDate(today.getDate() - 30);

const minutes = 1;
const db_data = [
    {
        "token": "Test1",
        "metricsList": [
            {
                "TimeStamp": format(today, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:3_Function Call.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 1 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 3 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:3_Walk the Plank.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 4 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 5 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"CHECK_ORANGE\",\"leftChild\":[{\"command\":\"NON_BRANCH_SLOT\"},{\"command\":\"NON_BRANCH_SLOT\"},{\"command\":\"NON_BRANCH_SLOT\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"RETURN\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 6 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 7 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            }
        ]
    },
    {
        "token": "Test2",
        "metricsList": [
            {
                "TimeStamp": format(new Date(previousDay.getTime() + (minutes) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:3_C.json"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + (minutes + 1) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + (minutes + 2) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + (minutes + 3) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:4_Recursive Call.json"
            }
        ]
    },
    {
        "token": "Test3",
        "metricsList": [
            {
                "TimeStamp": format(new Date(today.getTime() + 1 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:1_Play Button.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 3 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 4 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 5 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            }
        ]
    },
    {
        "token": "Test4",
        "metricsList": [
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:2_Gamma.json"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 1) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 2) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 3) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 4) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 5) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 7) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 8) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Gamma Completed"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 9) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 10) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 11) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:7_Branching Colors.json"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 12) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 13) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 14) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 15) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 16) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"CHECK_RED\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 17) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"CHECK_RED\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 18) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 19) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_MAIN\", \"leftChild\":null, \"rightChild\":null, \"parent\":\"END_OF_BRANCH\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 20) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 21) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CHECK_RED\",\"leftChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CALL_FUNCTION_MAIN\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[]}]"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 22) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 23) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 24) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 25) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"TURN_COUNTER_CLOCKWISE\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 26) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 27) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CHECK_RED\",\"leftChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CALL_FUNCTION_MAIN\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[]}]"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 28) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "error:Out of Bounds!"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 29) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 30) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 31) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 32) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 33) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"MOVE_FORWARD\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 34) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 35) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CHECK_RED\",\"leftChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CALL_FUNCTION_MAIN\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[]}]"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 36) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Branching Colors Completed"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 37) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 38) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackLevel"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 39) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:4_Blockers.json"
            },
            {
                "TimeStamp": format(new Date(lastSevenDay.getTime() + (minutes + 40) * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            }
        ]
    },
    {
        "token": "Test5",
        "metricsList": [
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:3_C.json"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":null, \"parent\":\"IS_VALID_MOVE\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":\"END_OF_BRANCH\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level C Completed"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:7_Branching Colors.json"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackMain"
            }
        ]
    },
    {
        "token": "Test6",
        "metricsList": [
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:3_Function Call.json"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_2\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"NON_BRANCH_SLOT\"}]},{\"funcName\":\"CALL_FUNCTION_3\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:1_Play Button.json"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackLevel"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:2_Gamma.json"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": format(lastthirtyDay, "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackMain"
            }
        ]
    },
    {
        "token": "Test7",
        "metricsList": [
            {
                "TimeStamp": format(new Date(today.getTime() + 1 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:11_Markers.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"REMOVE_MARKER\"},{\"command\":\"ADD_MARKER\"},{\"command\":\"ADD_MARKER\"}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "error:No Markers to Remove!"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "error:Editing Is Disabled Error."
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"ADD_MARKER\"},{\"command\":\"ADD_MARKER\"}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Markers Completed"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:1_Forward.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Forward Completed"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:2_Gamma.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Gamma Completed"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:4_Recursive Call.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Recursive Call Completed"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:5_Up.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "error:Can Only Place In Slots Error"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_MAIN\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"CALL_FUNCTION_MAIN\"}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Up Completed"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:6_Stairs.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Stairs Completed"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 10 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:7_Branching Colors.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            }
        ]
    },
    {
        "token": "Test8",
        "metricsList": [
            {
                "TimeStamp": format(new Date(today.getTime() + 1 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:3_Walk the Plank.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 3 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 4 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 5 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 6 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 7 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 8 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 9 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"ADD_MARKER\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Debug"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Run"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"CHECK_ORANGE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"},{\"command\":\"ADD_MARKER\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"RETURN\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Step"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"CHECK_ORANGE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"},{\"command\":\"ADD_MARKER\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"RETURN\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Walk the Plank Completed"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:11_Markers.json"
            },
            {
                "TimeStamp": format(new Date(today.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            }
        ]
    },
    {
        "token": "Test9",
        "metricsList": [
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 1 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:default_level.json"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackMain"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 5 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:1_One Block.json"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 7 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 8 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 8 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "HelpButton"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 9 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 9 * 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 10* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 10* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MarkerCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 11* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"ADD_MARKER\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 11* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 11* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"ADD_MARKER\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 13* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level One Block Completed"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 13* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 13* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 13* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:9_Finish Implementing Function.json"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 14* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 14* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 15* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": "3/18/2024 11:56:34 AM",
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 16* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 16* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 16* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 16* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 17* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Finish Implementing Function Completed"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 17* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 17* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 17* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:11_Markers.json"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 17* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 17* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Menu"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 17* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackMain"
            }
        ]
    },
    {
        "token": "Test10",
        "metricsList": [
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 1* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:3_Function Call.json"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 2* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 3* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 4* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 5* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 6* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 7* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_2\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"NON_BRANCH_SLOT\"}]},{\"funcName\":\"CALL_FUNCTION_3\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 8* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Function Call Completed"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 9* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 10* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonReplay"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 10* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 11* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction2"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 12* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 13* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:FunctionCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 14* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_2\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 15* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction2"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 16* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"CALL_FUNCTION_1\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 17* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_2\"}]},{\"funcName\":\"CALL_FUNCTION_2\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_3\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level Function Call Completed"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:7_checkColors.json"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "category:MovementCommandPaletteButton"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CHECK_GREEN\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"CHECK_GREEN\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"END_OF_BRANCH\"}]}]}]"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level checkColors Completed"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonNextLevel"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "levelName:8_PreMade Functions.json"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "CloseWindow"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunctionMain"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "SwitchToFunction1"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 18* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Play"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 19* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"CALL_FUNCTION_1\"}]},{\"funcName\":\"CALL_FUNCTION_1\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"CALL_FUNCTION_1\"}]}]"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 19* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "win: Level PreMade Functions Completed"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 20* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "Stop"
            },
            {
                "TimeStamp": format(new Date(previousDay.getTime() + 20* 60000), "M/d/yyyy h:mm:ss a"),
                "UserInteraction": "ButtonBackMain"
            }
        ]
    },
    // {
    //     "token": "Test11",
    //     "metricsList": [
    //         {
    //             "TimeStamp": format(new Date(previousDay.getTime() + 15 * 60000), "M/d/yyyy h:mm:ss a"),
    //             "UserInteraction": "levelName:1_Play Button.json"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:06 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:06 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:06 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:08 AM",
    //             "UserInteraction": "win: Level Play Button Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:08 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:10 AM",
    //             "UserInteraction": "ButtonBackLevel"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:11 AM",
    //             "UserInteraction": "levelName:1_Play Button.json"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:11 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:11 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:12 AM",
    //             "UserInteraction": "win: Level Play Button Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:12 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:13 AM",
    //             "UserInteraction": "ButtonBackMain"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:15 AM",
    //             "UserInteraction": "levelName:2_Move Command.json"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:16 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:16 AM",
    //             "UserInteraction": "category:MovementCommandPaletteButton"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:17 AM",
    //             "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:17 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:18 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:19 AM",
    //             "UserInteraction": "win: Level Move Command Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:19 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:20 AM",
    //             "UserInteraction": "ButtonNextLevel"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:20 AM",
    //             "UserInteraction": "levelName:3_Add Command by Clicking.json"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:21 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:23 AM",
    //             "UserInteraction": "category:MovementCommandPaletteButton"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:23 AM",
    //             "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":\"MOVE_FORWARD\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:24 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:24 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:25 AM",
    //             "UserInteraction": "win: Level Add Command by Clicking Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:25 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:26 AM",
    //             "UserInteraction": "ButtonNextLevel"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:26 AM",
    //             "UserInteraction": "levelName:4_Turn Command.json"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:26 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:27 AM",
    //             "UserInteraction": "category:MovementCommandPaletteButton"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:28 AM",
    //             "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:32 AM",
    //             "UserInteraction": "error:Command Is Not Removable Error."
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:33 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:33 AM",
    //             "UserInteraction": "error:Command Is Not Removable Error."
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:34 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:35 AM",
    //             "UserInteraction": "error:Command Is Not Removable Error."
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:35 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:36 AM",
    //             "UserInteraction": "error:Command Is Not Removable Error."
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:37 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:39 AM",
    //             "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:40 AM",
    //             "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:41 AM",
    //             "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:45 AM",
    //             "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:46 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:46 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:48 AM",
    //             "UserInteraction": "error:Out of Bounds!"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:48 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:49 AM",
    //             "UserInteraction": "error:Editing Is Disabled Error."
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:49 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:50 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:50 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:51 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:52 AM",
    //             "UserInteraction": "error:Can Only Place In Slots Error"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:52 AM",
    //             "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:53 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:55 AM",
    //             "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:56 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:56 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:57 AM",
    //             "UserInteraction": "win: Level Turn Command Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:57 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:58 AM",
    //             "UserInteraction": "ButtonNextLevel"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:58 AM",
    //             "UserInteraction": "levelName:5_isValidMove.json"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:59 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:59 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:53:59 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:00 AM",
    //             "UserInteraction": "win: Level isValidMove Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:00 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:01 AM",
    //             "UserInteraction": "ButtonReplay"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:02 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:02 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"MOVE_FORWARD\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:05 AM",
    //             "UserInteraction": "win: Level isValidMove Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:05 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:06 AM",
    //             "UserInteraction": "ButtonNextLevel"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:06 AM",
    //             "UserInteraction": "levelName:6_Try isValidMove.json"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:07 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:09 AM",
    //             "UserInteraction": "category:MovementCommandPaletteButton"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:10 AM",
    //             "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:12 AM",
    //             "UserInteraction": "error:Can Only Place In Slots Error"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:12 AM",
    //             "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:12 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:13 AM",
    //             "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:14 AM",
    //             "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:15 AM",
    //             "UserInteraction": "Debug"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:16 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:17 AM",
    //             "UserInteraction": "Run"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:17 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:18 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:19 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:21 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:22 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:22 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:22 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:24 AM",
    //             "UserInteraction": "error:Can Only Place In Slots Error"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:24 AM",
    //             "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":false, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:25 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:26 AM",
    //             "UserInteraction": "category:MovementCommandPaletteButton"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:28 AM",
    //             "UserInteraction": "command: {\"move\":\"TURN_COUNTER_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:29 AM",
    //             "UserInteraction": "command: {\"move\":\"TURN_CLOCKWISE\", \"leftChild\":null, \"rightChild\":null, \"parent\":null, \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:30 AM",
    //             "UserInteraction": "Debug"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:31 AM",
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:31 AM",
    //             "UserInteraction": "Run"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:31 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:32 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:32 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:33 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:33 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:33 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "win: Level Try isValidMove Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "win: Level Try isValidMove Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "win: Level Try isValidMove Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:34 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:35 AM",
    //             "UserInteraction": "Step"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:35 AM",
    //             "UserInteraction": "win: Level Try isValidMove Completed"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:35 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:36 AM",
    //             "UserInteraction": "Run"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:36 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:38 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:38 AM",
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:40 AM",
    //             "UserInteraction": "Play"
    //         },
    //         {
    //             "TimeStamp": "3/18/2024 11:54:40 AM",
    //             "UserInteraction": "commandTree:[{\"funcName\":\"CALL_FUNCTION_MAIN\",\"funcDef\":[{\"command\":\"IS_VALID_MOVE\",\"leftChild\":[{\"command\":\"TURN_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}],\"rightChild\":[{\"command\":\"TURN_COUNTER_CLOCKWISE\"},{\"command\":\"END_OF_BRANCH\"}]},{\"command\":\"MOVE_FORWARD\"},{\"command\":\"MOVE_FORWARD\"}]}]"
    //         },
    //         {
    //             "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
    //             "UserInteraction": "win: Level Try isValidMove Completed"
    //         },
    //         {
    //             "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": format(new Date(today.getTime() + 2 * 60000), "M/d/yyyy h:mm:ss a"),
    //             "UserInteraction": "ButtonNextLevel"
    //         },
    //         {
    //             "TimeStamp": format(new Date(today.getTime() + 3 * 60000), "M/d/yyyy h:mm:ss a"),
    //             "UserInteraction": "levelName:7_checkColors.json"
    //         },
    //         {
    //             "TimeStamp": format(new Date(today.getTime() + 3 * 60000), "M/d/yyyy h:mm:ss a"),
    //             "UserInteraction": "CloseWindow"
    //         },
    //         {
    //             "TimeStamp": format(new Date(today.getTime() + 5 * 60000), "M/d/yyyy h:mm:ss a"),
    //             "UserInteraction": "Stop"
    //         },
    //         {
    //             "TimeStamp": format(new Date(today.getTime() + 6 * 60000), "M/d/yyyy h:mm:ss a"),
    //             "UserInteraction": "Stop"
    //         }
    //     ]
    // }
];
module.exports = db_data;