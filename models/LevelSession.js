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
const levelSessionSchema = new mongoose.Schema({
    levelName: {
        type: String,
        required: true
    },
    userInteractions: [{
        timeStamp: {
            type: Date,
            required: true,
        },
        action: {
            type: String,
            required: true
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
        },
    }],
});
levelSessionSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.levelSessionId = returnedObject._id.toString();
        let userInteractions = returnedObject.userInteractions;
        if (userInteractions && Array.isArray(userInteractions)) {
            userInteractions = userInteractions.map(obj => ({
                ...obj,
                timeStamp: obj.timeStamp.toUTCString(),
            }));
            returnedObject.userInteractions = userInteractions;
        }
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("LevelSession", levelSessionSchema);