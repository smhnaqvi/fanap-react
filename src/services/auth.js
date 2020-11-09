import {auth} from "./firebase"

export function signin(email,password){
    return auth.signInWithEmailAndPassword(email,password);
}
export function signup(email,password){
    return auth.createUserWithEmailAndPassword(email,password);
}
export function signout(){
    auth.signOut();
}