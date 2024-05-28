const mongoose = require("mongoose").set("strictQuery", true);

// Represents the users who can login to the application
const appUserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    canAccess: {
        type: Boolean,
        default: false
    }
});

appUserSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.userId = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

module.exports = mongoose.model("AppUser", appUserSchema);