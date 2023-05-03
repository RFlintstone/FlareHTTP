async function insertController(req, res) {
    const coll = req.body.name;
    const id = req.body.id;
    const body = req.body.body;
    let msg;

    const insertData = await require('../../models/firebase/insert/insertData');
    if (coll !== undefined && id !== undefined && body !== undefined) {
        // collection, newID, body
        msg = await insertData.insertData(coll, id, body)
    }
    res.json(msg);
}

module.exports = insertController;