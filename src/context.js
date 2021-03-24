import React, { useState, useContext, useEffect, useReducer } from 'react'
import reducer from './reducers/Reducer';
import {searching,resetData} from './actions/Actions';
import {firebaseConfig,db} from './firebaseConfig';

const apiKey = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext()

const defaultState = {
  books:[],
  isOpen:false
}

const AppProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, defaultState)
  const [user,setUser] = useState('')  ;
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);
  const [whishList,setWhishList] = useState([]);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }
  
  const handleLogin = () =>{
    clearErrors();
    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err)=>{
        switch(err.code){
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
          case 'auth/wrong-password':
            setPasswordError(err.message);
            break;
          default:
            throw new Error(err + 'not found');
        }
      })
  };
  
  const handleSignup = () => {
    clearErrors();
    firebaseConfig
      .auth()
      .createUserWithEmailAndPassword(email,password).then((cred)=>{
        if(cred){
          db.collection('users').doc(cred.user.uid).set({
            email:email
          })
        }
      })
      .catch((err)=>{
        switch(err.code){
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
          default:
            throw new Error(err + 'not found');
        }
      })
  };
  
  const handleLogout = () => {
    firebaseConfig.auth().signOut();
  };

  useEffect(()=>{
    const authListener = () => {
      firebaseConfig.auth().onAuthStateChanged((user)=>{
        if(user){
          clearInputs('');
          setUser(user);
        }else{
          setUser('')
        }
      })
    };
    authListener();
  },[])

  return (
    <AppContext.Provider 
      value={{
        apiKey,
        data,
        dispatch,
        searching,
        resetData,
        user,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        handleLogout,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        hasAccount,
        setHasAccount,
        whishList,
        setWhishList
      }}>
      {children}
    </AppContext.Provider>
  )
}

// Export all props of AppContext
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
