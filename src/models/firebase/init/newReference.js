const admin = require("firebase-admin");
function newReference() {
    // Get the (new) reference to the Firestore database
    return admin.firestore();
}

module.exports = {
    newReference
}