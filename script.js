// Firebase Configuration (Replace with Your Firebase Credentials)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Login Function
document.getElementById("loginButton")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
});

// Signup Function
document.getElementById("signupButton")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
});

// Google Sign In
document.getElementById("googleAuthButton")?.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
});

// Logout Function
document.getElementById("logoutButton")?.addEventListener("click", () => {
    auth.signOut().then(() => window.location.href = "login.html");
});

// Counter Logic with Firestore Storage
let mainCount = 0, subCount = 0;
auth.onAuthStateChanged(user => {
    if (user) {
        db.collection("users").doc(user.uid).get().then(doc => {
            if (doc.exists) {
                mainCount = doc.data().mainCounter || 0;
                subCount = doc.data().subCounter || 0;
                document.getElementById("main-counter").textContent = mainCount;
                document.getElementById("sub-counter").textContent = subCount;
            }
        });
    }
});
