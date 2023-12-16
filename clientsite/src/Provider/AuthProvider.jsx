import React, { createContext, useEffect, useState } from 'react';

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import app from '../firebase';
import { useNavigate } from 'react-router-dom';







export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const [side, setSide] = useState(true)
    const [token, setToken] = useState(false)





    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password, name) => {
        setLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                saveUser(name, email);
                alert('Registration Successful');
                updateProfile(auth.currentUser, {
                    displayName: name,
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                setLoading(false);
                // Handle specific error codes and show appropriate messages
                switch (errorCode) {
                    case 'auth/email-already-in-use':
                        alert('Email is already in use.');
                        break;
                    case 'auth/invalid-email':
                        alert('Invalid email address.');
                        break;
                    case 'auth/weak-password':
                        alert('Password is too weak. Choose a stronger password.');
                        break;
                    default:
                        alert(`Error: ${errorMessage}`);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const saveUser = (name, email) => {
        const user = { name, email }
        fetch("http://localhost:10000/api/v1/user/auth", {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const token = data.token
                localStorage.setItem('token', token)
                setToken(token)
            })

    }




    const loginWithEmail = (email, password) => {
        console.log(email, password);
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // alert({
                //     icon: 'success',
                //     title: 'OMG...',
                //     text: 'Login SuccessFull',
                // })
                const user = userCredential.user;
                const email = user?.email
                const name = user?.displayName
                saveUser(email, name)
                console.log(user);
                // saveUser(user)

                // ...
            })
            .catch((error) => {
                const errorCode = error.code;

                console.log(errorCode);

                // Handle specific error codes and show appropriate messages
                switch (errorCode) {
                    case 'auth/user-not-found':
                        alert('User not found. Check your email address.');
                        break;
                    case 'auth/invalid-email':
                        alert('Invalid email address.');
                        break;
                    case 'auth/wrong-password':
                        alert('Invalid password. Check your password.');
                        break;
                    default:
                        alert(`Error: ${errorCode}`);
                }
            });
    }


    const google = () => {
        setLoading(true)
        signInWithPopup(auth, googleProvider)

            .then(async (result) => {
                const user = result.user
                const name = user?.displayName
                const email = user?.email
                if (
                    user
                ) {
                    saveUser(name, email)
                }





            })
            .catch((error) => {
                const errorMessage = error.message;

            });
    }

    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {

                localStorage.removeItem('token')

            })
            .catch((error) => {
                // An error happened.
            });
    }



    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // You can implement logic here to persist the dark mode preference in local storage
        // and retrieve it when the component mounts
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setIsDarkMode(JSON.parse(savedDarkMode));
        }
    }, []);

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        // You can also save the dark mode preference in local storage for persistence
        localStorage.setItem('darkMode', JSON.stringify(newMode));
    };






    useEffect(() => {
        const tokenData = localStorage.getItem('token');
        setToken(tokenData)
        let unsubscribe;

        if (tokenData || token) {
            unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                setLoading(false);
                setUser(currentUser);
            });
        } else {
            setLoading(false);
            setUser(null);
        }

        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
        };
    }, [token])

    const authInfo = { google, createUser, loginWithEmail, user, logOut, setLoading, loading, side, setSide, toggleDarkMode, setIsDarkMode, isDarkMode, token }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;