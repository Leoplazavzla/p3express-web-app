const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addPortfolioRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then(user => {
        return admin.auth().setCustomUserClaims(user.uid, {
            portfolio: true,
            projectManager: false,
            consultant: false,
            company: data.company
        });
    }).then(() => {
        return {
            message: `Success! ${data.email} has been made a Portfolio Manager`
        }
    }).catch(error => {
        return error
    })
})
