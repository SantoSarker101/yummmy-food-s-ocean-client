import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)

const AuthProvider = ({children}) => {
	const [user,setUser] = useState(null);
	const [loading, setLoading] = useState(true)


	const createUser = (email,password) =>{
		setLoading(true)
		return createUserWithEmailAndPassword(auth,email,password);
	}


	const SignInGooglePop = (googleProvider) =>{
		setLoading(true)
		return signInWithPopup(auth,googleProvider)
	}


	const signInGithubPop = (githubProvider) =>{
		setLoading(true)
		return signInWithPopup(auth,githubProvider)
	}


	const signIn = (email,password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth,email,password)
	}

	const passwordReset = (email) => {
		return sendPasswordResetEmail(auth,email)
	}


	const logOut = () => {
		setLoading(true)
		return signOut(auth);
	}



	// observer user auth state

	useEffect(() =>{
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser);
			setLoading(false)
		});

		// stop observing while unmounting
		return () =>{
			return unsubscribe();
		}
	},[])




	const authInfo = {
		user,
		SignInGooglePop,
		signInGithubPop,
		createUser,
		signIn,
		passwordReset,
		logOut,
		loading
	}
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;