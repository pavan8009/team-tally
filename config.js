// Team Tally settings. Paste your Firebase web config below (Firebase console > Project settings > Your apps).
// You can reuse the same Firebase project as your badminton app.
window.TALLY_CONFIG = {
  // One id per group. Each group's data is kept separately under groups/<groupId> in Firestore.
  groupId: "goa-waves",
  firebase: {
    apiKey: "PASTE_API_KEY",
    authDomain: "PASTE_PROJECT.firebaseapp.com",
    projectId: "PASTE_PROJECT",
    storageBucket: "PASTE_PROJECT.appspot.com",
    messagingSenderId: "PASTE_SENDER_ID",
    appId: "PASTE_APP_ID"
  }
};
