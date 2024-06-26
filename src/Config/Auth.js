import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./Firebase";

export const doSignInWithEmailAndPassword = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
};


export const doCreateUserWithEmailAndPassword = async (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
};


export const doSignOut = () =>{
    return auth.signOut();
};




