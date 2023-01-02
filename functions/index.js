const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { getAuth } = require('firebase-admin/auth');
admin.initializeApp();

exports.addConsultantRoleClaims = functions.auth.user().onCreate(async (user) => {
    console.log('entering consultant')
    const consultantRoleClaims = {
        role: 'consultant'
    };
    try {
        return await getAuth().setCustomUserClaims(user.uid, consultantRoleClaims);
    }catch (e) {
        console.log(e);
    }
});

exports.addPortfolioRoleClaims = functions.auth.user().onCreate(async (user) => {
    console.log('entering portfolio')
    const portfolioRoleClaims = {
        role: 'portfolioManager'
    };
    try {
        return await getAuth().setCustomUserClaims(user.uid, portfolioRoleClaims);
    }catch (e) {
        console.log(e);
    }
});

// Set admin privilege on the user corresponding to uid.
