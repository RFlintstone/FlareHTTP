async function fetchController(req, res) {
    const id = req.params.id;
    const f1 = req.params.fone;
    const f2 = req.params.ftwo;

    const fetchAll = await require('../../models/firebase/fetch/fetchAll');
    const fetchParam = await require('../../models/firebase/fetch/fetchParam');
    const fetchWhere = await require('../../models/firebase/fetch/fetchWhere');

    let msg;
    if (id !== undefined && (f1 === '==' || f1 === '!=')) {
        // collection, paramId, operator, paramField
        msg = await fetchWhere.fetchDataByWhere('data', id, f1, f2)
    } else if (id !== undefined) {
        // collection, paramId, paramField
        msg = await fetchParam.fetchDataByParam('data', id, f1)
    } else {
        // collection, orderBy, direction
        msg = await fetchAll.fetchData('data', 'time', 'desc');
    }
    res.json(msg);
}

module.exports = fetchController;