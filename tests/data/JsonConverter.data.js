const level = {
    "metricsList": [
        {
            "TimeStamp": "2/23/2023 11:58:28 AM",
            "UserInteraction": "levelName: my_level.json"
        },
        {
            "TimeStamp": "2/23/2023 11:58:28 AM",
            "UserInteraction": "levelName: default_level.json"
        }]
};

const category = {
    "metricsList": [
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: my_level.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "category:MovementCommandPaletteButton"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "category:MarkerCommandPaletteButton"
        }]
};
const multilevelCategory = {
    "metricsList": [
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: my_level.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "category:MovementCommandPaletteButton"
        }, {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: default_level.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "category:MarkerCommandPaletteButton"
        }]
};
const command = {
    "metricsList": [
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: my_level.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "category:MovementCommandPaletteButton"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":\"END_OF_BRANCH\", \"parent\":\"MOVE_FORWARD\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
        },
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: default.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "category:FunctionCommandPaletteButton"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "command:{\"move\":\"TURN_CLOCKWISE\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":\"END_OF_BRANCH\", \"parent\":\"MOVE_FORWARD\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
        }]
};
const error = {
    "metricsList": [
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: my_level.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "error: Maximum one command allowed"
        },
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: default.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "error: Attempts exceeded"
        }]
};
const win = {
    "metricsList": [
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: my_level.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "category:MovementCommandPaletteButton"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":\"END_OF_BRANCH\", \"parent\":\"MOVE_FORWARD\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "play"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "win: Level1 completed"
        }, {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "levelName: default.json"
        },
        {
            "TimeStamp": "2/23/2023 11:47:20 AM",
            "UserInteraction": "category:FunctionCommandPaletteButton"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "command: {\"move\":\"MOVE_FORWARD\", \"leftChild\":\"END_OF_BRANCH\", \"rightChild\":\"END_OF_BRANCH\", \"parent\":\"MOVE_FORWARD\", \"parentAlt\":null, \"isRemovable\":true, \"isSlot\":false}"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "play"
        },
        {
            "TimeStamp": "2/23/2023 11:47:22 AM",
            "UserInteraction": "win: Level2 completed"
        }]
};

module.exports = { level,category,multilevelCategory,command,error,win
};