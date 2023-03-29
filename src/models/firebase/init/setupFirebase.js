require('dotenv').config();
const {initializeApp, applicationDefault, cert} = require('firebase-admin/app');
const {getFirestore, Timestamp, FieldValue} = require('firebase-admin/firestore');
const DATABASE_URL = process.env.EXPRESS_IP;
let db;

function initFirestore() {
    const serviceAccount = require('../../../../firebase-key.json');

    initializeApp({
        credential: cert(serviceAccount)
    });

    db = getFirestore();

    // // Firebase Admin configuration
    // const serviceAccount = require('../../../../firebase-key.json');
    // const admin = require("firebase-admin");
    // const adminConfig = {
    //     credential: admin.credential.cert(serviceAccount),
    //     databaseURL: DATABASE_URL || ''
    // };
    //
    // // Initialize Firebase Admin
    // admin.initializeApp(adminConfig);
}

function getDB() {
    return db
}

module.exports = {
    initFirestore,
    getDB,
};