
const firestoreService = require('firestore-export-import');
const serviceAccount = require('./army-lists-40k-firebase-adminsdk-h7t8y-4a119b6bed.json');

// Initiate Firebase App
// appName is optional, you can omit it.

const databaseURL = "https://army-lists-40k.firebaseio.com";


firestoreService.initializeApp(serviceAccount, databaseURL);

// Start exporting your data
firestoreService.restore('../helpers/DarkAngelsCurrent.json')
