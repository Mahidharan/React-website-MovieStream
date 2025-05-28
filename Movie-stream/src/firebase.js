
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyBGXQswfHmLyEn5435F1-G38Ubsh_2-gl8",
  authDomain: "movie-stream-63166.firebaseapp.com",
  projectId: "movie-stream-63166",
  storageBucket: "movie-stream-63166.firebasestorage.app",
  messagingSenderId: "327767757405",
  appId: "1:327767757405:web:2afbacbc22de6b4104f3b4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,

        })
    } catch (error) {
        console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email,password)=>{
    try {
        await  signInWithEmailAndPassword(auth, email, password);
        
    } catch (error) {
        console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};