async function fetchDataByWhere(collection, paramId, operator, paramField) {
    // Make sure we have the right reference
    const db = await require('../init/setupFirebase').getDB();

    // Get a specific document from 'data' based on the passed id.
    const Ref = db.collection(collection);
    const snapshot = await Ref.where(paramId, operator, paramField).get();

    // Put our data in the variable, so we can return it easily
    let res = [];
    if (!snapshot.empty) {
        snapshot.forEach(doc => {
            res.push(doc.data());
        });
    } else {
        res = {data: 'null'}
    }

    return res;
}

module.exports = {
    fetchDataByWhere
};