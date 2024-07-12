// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBibGR4VB_90eXcZOXwnGWc-1ZvI9DBaWM",
  authDomain: "first-project-15fc3.firebaseapp.com",
  projectId: "first-project-15fc3",
  storageBucket: "first-project-15fc3.appspot.com",
  messagingSenderId: "904073007465",
  appId: "1:904073007465:web:e5fad8a8ee227f7da46df8",
  measurementId: "G-NCQ9GPKRC1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signup_email = document.getElementById("signupEmail");
const signup_password = document.getElementById("signupPassword");
const signup_btn = document.getElementById("signupBtn");

var email_login = document.getElementById("signinEmail");
var password_login = document.getElementById("signinPassword");
var login_btn = document.getElementById("signinBtn");

var logout_btn = document.getElementById("logout_btn");
var auth_container = document.getElementById("auth_container");
var user_container = document.getElementById("user_container");
var user_email = document.getElementById("user_email");

signup_btn.addEventListener("click", createUserAccount);

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("user is loggend in");
    auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email.innerText = user.email;
    const uid = user.uid;
  } else {
    console.log("user is not logged in ");
    auth_container.style.display = "block";
    user_container.style.display = "none";
  }
});

function createUserAccount() {
  createUserWithEmailAndPassword(
    auth,
    signup_email.value,
    signup_password.value
  )
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
}
// Log In
login_btn.addEventListener("click", () => {
  signInWithEmailAndPassword(auth, email_login.value, password_login.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("user after login=>", user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
});

// Log Out FUnc
logout_btn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
});
const isUser = false;

if (isUser) {
  console.log("user", user);
} else if (isUser == false) {
}
