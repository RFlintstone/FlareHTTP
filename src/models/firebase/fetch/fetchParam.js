async function fetchDataByParam(collection, paramId, paramField) {
    // Make sure we have the right reference
    const db = await require('../init/setupFirebase').getDB();

    // Get a specific document from 'data' based on the passed id.
    const Ref = db.collection(collection).doc(paramId);
    const doc = await Ref.get();

    // Put our data in the variable, so we can return it easily
    let res;
    if (doc.exists && doc.data()[paramField] !== undefined) {
        res = {data: doc.data()[paramField]}
    } else if (paramField == undefined) {
        res = {data: doc.data()}
    } else {
        res = {data: 'null'}
    }

    return res;
}

module.exports = {
    fetchDataByParam
};