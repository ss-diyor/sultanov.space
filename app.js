import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Sizning nusxalab olgan konfiguratsiyangiz
const firebaseConfig = {
  apiKey: "AIzaSyDhqRKG4ECFK4LdEpK7LgF7rQS3JoBeTOA",
  authDomain: "bustanlik-ss.firebaseapp.com",
  projectId: "bustanlik-ss",
  storageBucket: "bustanlik-ss.firebasestorage.app",
  messagingSenderId: "99362208521",
  appId: "1:99362208521:web:1eb361f3500f2f5bc2b1d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Ro'yxatdan o'tish mantiqi
const regBtn = document.getElementById('register-btn');
if(regBtn) {
    regBtn.addEventListener('click', () => {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
                document.getElementById('auth-section').style.display = 'none';
                document.getElementById('app-section').style.display = 'block';
                document.getElementById('user-display').innerText = "Salom, " + email;
            })
            .catch((error) => {
                alert("Xatolik: " + error.message);
            });
    });
}
