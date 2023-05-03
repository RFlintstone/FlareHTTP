const messages = require('../../../statusMessages.json');

async function timestamp() {
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const d = new Date();
    const Timestamp = d.getDate() + '-' + months[d.getMonth()] + '-' + d.getFullYear() + ' - ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    return Timestamp.toString(); // Make Timestamp a string so it can be used
}

async function insertData(collection, newID, body) {
    let json = {
        first_name: body.first_name,
        last_name: body.last_name,
        age: body.age,
        email: body.email,
        iban: body.iban,
        time: await timestamp()
    }

    console.log(json)

    // Make sure we have the right reference
    const db = await require('../init/setupFirebase').getDB();

    // Create a new document with a custom id in specified collection
    const Ref = db.collection(collection).doc(newID);

    // Insert the data in the newly created document
    let state;
    await Ref.set(json)
        .then(() => {
            // Log our document id
            console.log('Added/updated document with id', newID);
            state = {state: messages.insert.sucess};
        })
        .catch((error) => {
            // Log catched error
            console.log('Error adding document: ', error);
            state = {state: messages.insert.failed};
        });

    return state;
}

module.exports = {
    insertData
};