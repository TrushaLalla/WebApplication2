//<script type="module" src="~js/login.js"></script>
//// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";
//// TODO: Add SDKs for Firebase products that you want to use
//// https://firebase.google.com/docs/web/setup#available-libraries

//// Your web app's Firebase configuration
//// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {
//    apiKey: "AIzaSyCFay_u390Jvxxb5fnLgolIC-o98Tr5U0s",
//    authDomain: "webapplication2-c4aa6.firebaseapp.com",
//    projectId: "webapplication2-c4aa6",
//    storageBucket: "webapplication2-c4aa6.firebasestorage.app",
//    messagingSenderId: "621050499658",
//    appId: "1:621050499658:web:f7e5f2d4c439565b030cb3",
//    measurementId: "G-LB37R11R69"
//};

//// Initialize Firebase
//const app = initializeApp(firebaseConfig);
////const analytics = getAnalytics(app);
//const auth = getAuth(app);

////button.youtube video




//const login = document.getElementById('login-btn');
//login.addEventListener("click", function (event) {
//    event.preventDefault()
//    //inputs from youtube video
//    const username = document.getElementById('uname1').value;
//    const password = document.getElementById('pass1').value;

//    signInWithEmailAndPassword(auth, email, password)
//        .then((userCredential) => {
//            // Signed up 
//            const user = userCredential.user;
//            localStorage.setItem("user", JSON.stringify({ uid: user.uid, email: user.email }));
//            //redirecting to blank page
//            window.location.href = "grand.html";
//            // ...
//        })
//        .catch((error) => {
//            const errorCode = error.code;
//            const errorMessage = error.message;
//            alert(`Login failed: ${ errorMessage }`);
//        })

//});

