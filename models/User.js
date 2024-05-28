const mongoose = require("mongoose").set("strictQuery", true);

// Represents the users playing the game
const userSchema = new mongoose.Schema({
    machineId: {
        type: String,
        unique: true,
        required: true
    }
});

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.userId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("User", userSchema);