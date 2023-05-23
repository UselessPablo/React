// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";

import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from 'firebase/auth';
// import * as firebase from 'firebase/app'
import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    doc,
    getDoc,
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAOngbwz8O6K3yrIMDsnYdF0zK8DO74Mqg",
    authDomain: "quick-wall-357622.firebaseapp.com",
    projectId: "quick-wall-357622",
    databaseURL: "https://quick-wall-357622-default-rtdb.firebaseio.com",
    storageBucket: "quick-wall-357622.appspot.com",
    messagingSenderId: "857150479386",
    appId: "1:857150479386:web:4053c105f877f9c31c05a3",
    measurementId: "G-X6NN1BR95S"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async (email, password) => {
    try {
        // Inicia sesión con el email y la contraseña proporcionados
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Obtén el documento del usuario desde Firestore
        const userDocRef = doc(db, 'users', user.uid);
        const userDocSnap = await getDoc(userDocRef);

        console.log(userDocSnap.exists(), userDocSnap.data()); // Verificar los valores del documento

        // Verifica si el usuario tiene el permiso de administrador
        if (userDocSnap.exists() && userDocSnap.data().isAdmin === 1) {
            return true;
        } else {
            throw new Error('No tienes permisos de administrador');
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
        return false;
    }
};


const registerWithEmailAndPassword = async ( email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        // Agregar el campo "isAdmin" al documento del usuario en Firestore
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            authProvider: "local",
            email,
            isAdmin: 0, // Set the default value of isAdmin to 0
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("¡Se envió el enlace para restablecer la contraseña!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
    signInWithEmailAndPassword,
};