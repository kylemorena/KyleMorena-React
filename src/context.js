import React, { useState, useContext, useEffect, useReducer } from 'react'
import reducer from './reducers/Reducer';
import {Searching,ResetData} from './actions/Actions';
import {initApp,db,firebaseValue} from './firebaseConfig';


const apiKey = process.env.REACT_APP_API_KEY;
const AppContext = React.createContext()

const defaultState = {
  books:[],
  isModalOpen:false
}

const AppProvider = ({ children }) => {
  const [data, dispatch] = useReducer(reducer, defaultState)
  const [user,setUser] = useState({})  ;
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);
  const [whishList,setWhishList] = useState([]);

  //#region HANDLE LOGIN/SIGNUP & LOGOUT
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
    initApp
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
    initApp
      .auth()
      .createUserWithEmailAndPassword(email,password).then((cred)=>{
        if(cred){
          db.collection('users').doc(cred.user.uid).set({
            books:[],
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
    initApp.auth().signOut();
  };
  //#endregion

  //#region HANDLE WISHLIST
  const addWhish = (book) =>{
    const store = db.collection('users').doc(user.uid);
    store.update({
      books: firebaseValue.arrayUnion(book)
    }).then(()=>{
      setWhishList([...whishList,book])
    })
  }
  const removeWhish = (book) =>{
    const store = db.collection('users').doc(user.uid);
    store.update({
      books: firebaseValue.arrayRemove(book)
    }).then(()=>{
      store.get().then(res=>{
        setWhishList(res.data().books)
      })
    })
  }
  //#endregion

  useEffect(()=>{
    const authListener = () => {
      initApp.auth().onAuthStateChanged((user)=>{
        if(user){
          db.collection('users').doc(user.uid).get().then((res)=>{
            setWhishList(res.data().books);
          })
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
        Searching,
        ResetData,
        user,
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        handleLogout,
        whishList,
        addWhish,
        removeWhish,
        emailError,
        setEmailError,
        passwordError,
        setPasswordError,
        hasAccount,
        setHasAccount
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
