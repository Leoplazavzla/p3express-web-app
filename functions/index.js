const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { getAuth } = require('firebase-admin/auth');
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

exports.addConsultantRole = functions.https.onCall((data, context) => {

    getAuth()
        .setCustomUserClaims(data.uid, { consultant: true })
        .then(() => {
            return {
                message: `Success! ${data.email} has been made a Portfolio Manager`
            }
            // The new custom claims will propagate to the user's ID token the
            // next time a new one is issued.
        }).catch(error => {
        console.log(error)
    });
})

exports.addConsultantRole2 = functions.auth.user().onCreate(async (user) => {
    const consultantRoleClaims = {
        role: 'consultant'
    }
    try {
        await getAuth().setCustomUserClaims(user.uid, consultantRoleClaims)
    }catch (e) {
        console.log(e)
    }
    console.log(user)
})

exports.addProjectManagerRole = functions.auth.user().onCreate(async (user) => {
    const projectManagerClaims = {
        role: 'projectManager'
    }
    try {
        await getAuth().setCustomUserClaims(user.uid, projectManagerClaims)
    }catch (e) {
        console.log(e)
    }
    console.log(user)
})

exports.addPortfolioRole2 = functions.auth.user().onCreate(async (user) => {
    const portfolioRoleClaims = {
        role: 'portfolioManager'
    }
    try {
        await getAuth().setCustomUserClaims(user.uid, portfolioRoleClaims)
    }catch (e) {
        console.log(e)
    }
    console.log(user)
})

// Set admin privilege on the user corresponding to uid.
