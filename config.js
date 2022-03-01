import firebase from 'firebase';

// add SDK Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyDsr08W0GafIbC3LpHobV_lTwJqlOwrH94",
        authDomain: "team-voting-ec139.firebaseapp.com",
        databaseURL: "https://team-voting-ec139-default-rtdb.firebaseio.com",
        projectId: "team-voting-ec139",
        storageBucket: "team-voting-ec139.appspot.com",
        messagingSenderId: "592483772959",
        appId: "1:592483772959:web:036563166d04894932432a"
      };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();