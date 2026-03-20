import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, browserLocalPersistence, browserSessionPersistence, setPersistence, sendPasswordResetEmail,signOut } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
/*import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-analytics.js";*/

const container = document.querySelector('.container');
const loginLink = document.querySelector('.SignInLink');
const registerLink = document.querySelector('.SignUpLink');

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('active');
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('active');
});

// EYE TOGGLE
document.getElementById('togglePassword').addEventListener('click', function () {
    const f = document.getElementById('pass1');
    f.type = f.type === 'password' ? 'text' : 'password';
    this.classList.toggle('bi-eye'); this.classList.toggle('bi-eye-slash');
});
document.getElementById('togglePassword2').addEventListener('click', function () {
    const f = document.getElementById('pass2');
    f.type = f.type === 'password' ? 'text' : 'password';
    this.classList.toggle('bi-eye'); this.classList.toggle('bi-eye-slash');
});
// ====== BUTTON DODGE SYSTEM (WORKS FOR BOTH FORMS) ======

document.querySelectorAll('.form-box form').forEach(form => {

    const btn = form.querySelector('.btn');
    const inputs = form.querySelectorAll('input[required]');

    function allFilled() {
        return [...inputs].every(input => input.value.trim() !== '');
    }

    function moveButton() {
        if (allFilled()) return;

        const parent = btn.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const btnRect = btn.getBoundingClientRect();

        const maxX = parentRect.width - btnRect.width;
        const maxY = parentRect.height - btnRect.height;

        const randomX = Math.random() * maxX - (maxX / 2);
        const randomY = Math.random() * maxY - (maxY / 2);

        btn.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }

    function validate() {
        if (allFilled()) {
            btn.disabled = false;
            btn.style.transform = 'translate(0,0)';
        } else {
            btn.disabled = true;
        }
    }

    btn.addEventListener('mouseover', moveButton);
    btn.addEventListener('touchstart', moveButton);
    form.addEventListener('input', validate);

    validate(); // initialize state
});


function showMsg() {
    const isEmpty = uname.value === '' || pass.value === '';



    if (isEmpty) {
        btn.disabled = true;
        msg.innerText = 'Please fill the input fields before proceeding';
        msg.style.color = 'rgb(218 49 49)';
    } else {
        btn.disabled = false;
        msg.innerText = 'Great! Now you can proceed';
        msg.style.color = '#92ff92';
        btn.classList.add('no-shift');
        // Reset button position
        btn.classList.remove('shift-left', 'shift-right', 'shift-top', 'shift-bottom');
    }
}
//forgot password jsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
document.getElementById('forgotLink').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('step1').style.display = 'block';
    document.getElementById('step2').style.display = 'none';
    document.getElementById('forgotOverlay').classList.add('active');
});

document.getElementById('forgotClose').addEventListener('click', function () {
    document.getElementById('forgotOverlay').classList.remove('active');
});

document.getElementById('forgotOverlay').addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('active');
});
// SEND OTP → SHOW STEP 2
document.getElementById('sendOtpBtn').addEventListener('click', function () {
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
});
// OTP AUTO-ADVANCE + BACKSPACE
document.querySelectorAll('.otp-input').forEach((input, index, inputs) => {
    input.addEventListener('input', function () {
        if (this.value.length === 1 && index < inputs.length - 1) inputs[index + 1].focus();
    });
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && this.value === '' && index > 0) inputs[index - 1].focus();
    });
});

//-----------------OK POP UP BUTTON-------------------------


document.getElementById("okBtn").addEventListener("click", function () {
    document.getElementById("forgotOverlay").classList.remove("active");
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
});

document.getElementById('okBtn').addEventListener('click', function () {
    const email = document.getElementById('Emailspace').value;
    sendPasswordResetEmail(auth, email)
        .then(() => {
            document.getElementById('step1').style.display = 'none';
            document.getElementById('step2').style.display = 'block';
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
});

//---------------------------------REGISTER PAGE FIREBASE CONFIG--------------------------------------------------------
/*<script type="module" src="~/js/javascript.js"></script>*/



const firebaseConfig = {
    apiKey: "AIzaSyCFay_u390Jvxxb5fnLgolIC-o98Tr5U0s",
    authDomain: "webapplication2-c4aa6.firebaseapp.com",
    projectId: "webapplication2-c4aa6",
    storageBucket: "webapplication2-c4aa6.firebasestorage.app",
    messagingSenderId: "621050499658",
    appId: "1:621050499658:web:f7e5f2d4c439565b030cb3",
    measurementId: "G-LB37R11R69"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//This forces a sign out every time the login page loads, so the previous session is cleared. 
//Then when they login with Remember Me checked it will persist, and without it checked it will clear on browser close.
// Set default persistence to session (clears when browser closes). so that browser doesnt redirect when rememebr me is unticked.
// Sign out any existing session on page load
signOut(auth).catch(() => { });

// Set default persistence to session
setPersistence(auth, browserSessionPersistence);
//button.youtube video






document.getElementById('register-btn').addEventListener("click", function (event) {
    event.preventDefault()
    //inputs from youtube video
    const email = document.getElementById('email2').value;
    const password = document.getElementById('pass2').value;
    // ====== PASSWORD VALIDATION ======
    const errors = [];

    if (password.length < 6 || password.length > 10) errors.push("• Be between 6 and 10 characters");
    if (!/[A-Z]/.test(password)) errors.push("• Contain at least one uppercase letter");
    if (!/[a-z]/.test(password)) errors.push("• Contain at least one lowercase letter");
    if (!/[0-9]/.test(password)) errors.push("• Contain at least one number");
    if (!/[\^$*.\[\]{}()?"!@#%&/\\,><':;|_~]/.test(password)) errors.push("• Contain at least one special character");

    if (errors.length > 0) {
        alert("Password must:\n" + errors.join("\n"));
        return;
    }

   
    createUserWithEmailAndPassword(auth, email, password)
   
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert("Account Created! " + user.email);
           
            // ...
        })
        .catch((error) => {
            if (error.code === 'auth/email-already-in-use') {
                alert("An account with this email already exists!");
            } else {
                alert(error.message);
            }
        });
})
//----------------------------LOGIN PAGE FIREBASE----------------------------------------------------------------------------------------------------
  

//const firebaseConfig = {
//    apiKey: "AIzaSyCFay_u390Jvxxb5fnLgolIC-o98Tr5U0s",
//    authDomain: "webapplication2-c4aa6.firebaseapp.com",
//    projectId: "webapplication2-c4aa6",
//    storageBucket: "webapplication2-c4aa6.firebasestorage.app",
//    messagingSenderId: "621050499658",
//    appId: "1:621050499658:web:f7e5f2d4c439565b030cb3",
//    measurementId: "G-LB37R11R69"
//};

//const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);

//button.youtube video




const login = document.getElementById('login-btn');
login.addEventListener("click", function (event) {
    event.preventDefault()
    //inputs from youtube video
    const email = document.getElementById('email1').value;
    const password = document.getElementById('pass1').value;
    const remember = document.getElementById('remember').checked;
    //clear session for non-redierecting function, doesnt work thou
    const persistence = remember ? browserLocalPersistence : browserSessionPersistence;

    setPersistence(auth, persistence)
        .then(() => {
            return signInWithEmailAndPassword(auth, email, password);
        })
        .then((userCredential) => {
            const user = userCredential.user;
            window.location.href = "/Grand";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Login failed: " + error.message);
        });
});

//    signInWithEmailAndPassword(auth, email, password)
//        .then((userCredential) => {
//            // Signed up
//            const user = userCredential.user;
//            localStorage.setItem("user", JSON.stringify({ uid: user.uid, email: user.email }));
//            //redirecting to blank page
//            window.location.href = "/Grand";
//            // ...
//        })
//        .catch((error) => {
//            const errorCode = error.code;
//            const errorMessage = error.message;
//            alert(`Login failed: ${errorMessage}`);
//        })

//});

//google stuff below
const provider = new GoogleAuthProvider();
auth.languageCode = 'en';
const google = document.getElementById("google-btn");
google.addEventListener("click", function () {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "/Grand";
            
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
          
            
        });
        
});
//const user = auth.currentUser;
//function updateUserProfile(user) {
//    const grandusername = user.displayName;
//    const grandemail = user.email;
//    const grandprofile = user.photoURL;
//    //update the profile sectoin with user data
//    document.getElementById("grandusername").textContent = grandusername;
//    document.getElementById("grandemail").textContent = grandemail;
//    document.getElementById("grandprofile").src = grandprofile;

//}
//onAuthStateChanged(auth, (user) => {
//    if (user) {
//        updateUserProfile(user);
//        const uid = user.uid;
//        return uid;
//    } else {
//        alert("create account & login");
//        window.location.href = "/auth/Login";
//    }
//});

//google stuff end above
//github stuff below
const githubprovider = new GithubAuthProvider();
//auth.languageCode = 'en'; DONT NEED TO DUPLICATE IT

document.getElementById("github-btn").addEventListener("click", function () {
    signInWithPopup(auth, githubprovider)
        .then((result) => {
            // This gives you a github Access Token. You can use it to access the github API.
            //const credential = GithubAuthProvider.credentialFromResult(result);
            const user = result.user;
            console.log(user);
            window.location.href = "/Grand";

        }).catch((error) => {
            // Handle Errors here
            const errorMessage = error.message;
            alert("Github login failed: " + error.message);


        });

});
//DONT NEED TO DUPLICATE IT

//const user = auth.currentUser;
//function updateUserProfile(user) {
//    const grandusername = user.displayName;
//    const grandemail = user.email;
//    const grandprofile = user.photoURL;
//    //update the profile sectoin with user data
//    document.getElementById("grandusername").textContent = grandusername;
//    document.getElementById("grandemail").textContent = grandemail;
//    document.getElementById("grandprofile").src = grandprofile;

//}

//onAuthStateChanged(auth, (user) => {
//    if (user) {
//        updateUserProfile(user);
//        const uid = user.uid;
//        return uid;
//    } else {
//        alert("create account & login");
//        window.location.href = "/auth/Login";
//    }
//});
//github end

//CAPS LOCKS CODE BELOW

var password1 = document.getElementById("pass1");
var text1 = document.getElementById("text1");
password1.addEventListener("keyup", function (event) {

    if (event.getModifierState("CapsLock")) {
        text1.style.display = "block";
    } else {
        text1.style.display = "none"
    }
});

var password2 = document.getElementById("pass2");
var text2 = document.getElementById("text2");
password2.addEventListener("keyup", function (event) {

    if (event.getModifierState("CapsLock")) {
        text2.style.display = "block";
    } else {
        text2.style.display = "none"
    }
});


//CAPS LOCK CODE END
