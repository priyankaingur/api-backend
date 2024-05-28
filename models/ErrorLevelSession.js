const mongoose = require("mongoose").set("strictQuery", true);

const commandTreeDef = new mongoose.Schema(
    {
        _id: false,
        funcName: String,
        funcDef: [{
            _id: false,
            command: String
        }]
    }
);
// Represents the user interaction data recorded at each level.
const errorLevelSessionSchema = new mongoose.Schema({
    levelName: {
        type: String,
    },
    userInteractions: [{
        timeStamp: {
            type: String,
        },
        action: {
            type: String,
        },
        command: {
            move: String,
            leftChild: String,
            rightChild: String,
            parent: String,
            parentAlt: String,
            isRemovable: Boolean,
            isSlot: Boolean
        },
        msg: String,
        commandTree: {
            type: [commandTreeDef],
            default: undefined
        }
    }],
});

errorLevelSessionSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.levelSessionId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("ErrorLevelSession", errorLevelSessionSchema);