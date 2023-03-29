async function fetchData(collection, orderBy, direction) {
    const db = await require('../init/setupFirebase').getDB();
    const citiesRef = db.collection(collection);
    const snapshot = await citiesRef.get();
    let data = [];
    snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        data.push(doc.data());
    });
    return data;
}

module.exports = {
    fetchData
};