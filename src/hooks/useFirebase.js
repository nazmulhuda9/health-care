import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/LogIn/Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState(" ")
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    const emailHandle = e => {
        setEmail(e.target.value);
    }
    const passwordHandle = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = (e) => {
        console.log('this is registration')
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);

            })
        e.preventDefault()
    }


    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => setError(error.message));
    }

    // observe user state change 
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        })
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // setUser({})
            })
    }
    return {
        user,
        logOut,
        error, emailHandle, passwordHandle,
        handleRegistration,
        signInUsingGoogle
    }
}
export default useFirebase;