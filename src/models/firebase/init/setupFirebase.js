require('dotenv').config();
const {initializeApp, cert} = require('firebase-admin/app');
const {getFirestore} = require('firebase-admin/firestore');
let db;

function initFirestore() {
    const serviceAccount = require('../../../../firebase-key.json');
    initializeApp({
        credential: cert(serviceAccount)
    });
    db = getFirestore();
}

function getDB() {
    return db
}

module.exports = {
    initFirestore,
    getDB,
};