import { createContext, useEffect, useState } from "react";
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const provider = new GoogleAuthProvider();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signinWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log(currentUser);
        });
        return () => {
            unsubscribe();
        }
    }, []);


    const authdata = {
        createUser,
        signIn,
        logOut,
        user,
        signinWithGoogle,
        loading,
        setLoading
    };

    return (
        <AuthContext.Provider value={authdata}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;