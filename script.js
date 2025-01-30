// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9BdqXDKnUPiIFRg5AwSCi9Yq7k0kcgOk",
  authDomain: "counter-1e8c2.firebaseapp.com",
  projectId: "counter-1e8c2",
  storageBucket: "counter-1e8c2.firebasestorage.app",
  messagingSenderId: "213867864186",
  appId: "1:213867864186:web:0b52d90c3bb58317a7dbc3",
  measurementId: "G-70ERGZZCN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// 🔹 Redirect to login page if the user is NOT logged in (for index.html)
auth.onAuthStateChanged(user => {
    if (!user && window.location.pathname.includes("index.html")) {
        window.location.href = "login.html"; // Redirect to login if not authenticated
    }
});

// 🔹 Redirect to counter page if the user IS logged in (for login.html)
if (window.location.pathname.includes("login.html")) {
    auth.onAuthStateChanged(user => {
        if (user) {
            window.location.href = "index.html"; // Redirect to counter page if logged in
        }
    });
}

// 🔹 Login Function
document.getElementById("loginButton")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
});

// 🔹 Signup Function
document.getElementById("signupButton")?.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email, password)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
});

// 🔹 Google Sign In
document.getElementById("googleAuthButton")?.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(() => window.location.href = "index.html")
        .catch(error => alert(error.message));
});

// 🔹 Logout Function (Redirects to login page)
document.getElementById("logoutButton")?.addEventListener("click", () => {
    auth.signOut().then(() => window.location.href = "login.html");
});
