export default function FirebaseBelmilk() {
    var config = {
        apiKey: "AIzaSyDRmF7-ygZVxEqONzWdZMpOGatuaGRuAG0",
        authDomain: "my-first-fb-project-d2eea.firebaseapp.com",
        databaseURL: "https://my-first-fb-project-d2eea.firebaseio.com",
        projectId: "my-first-fb-project-d2eea",
        storageBucket: "my-first-fb-project-d2eea.appspot.com",
        messagingSenderId: "682214931627"
    };

    function init() {
        firebase.initializeApp(config);
    }
    
    this.equipments = function () {
        if (!firebase.apps.length)
            init();

        return new Promise((res, rej) => {
            firebase.database().ref('/equipments/').once('value').then((snapshot) => {
                res(snapshot.val());
            });
            if (firebase === undefined) {
                rej(new Error());
            }
        });
    };
}