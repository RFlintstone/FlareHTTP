const admin = require('firebase-admin');
let db; // Variable for our database reference

function newReference() {
    // Get the (new) reference to the Firestore database
    db = admin.firestore();
}






async function insertData(collection, newID, body) {
    // Make sure we have the right reference
    newReference();

    // Create a new document with a custom id in specified collection
    const Ref = db.collection(collection).doc(newID);

    // Insert the data in the newly created document
    let state;
    const res = await Ref.set(body)
        .then(() => {
            // Log our document id
            console.log('Added document with');
            state = { state: "added document" };
        })
        .catch((error) => {
            // Log catched error
            console.log('Error adding document: ', error);
            state = { state: "error adding document" };
        });

    return state;
}

module.exports = {
    fetchData,
    fetchDataByParam,
    fetchDataByWhere,
    insertData
};