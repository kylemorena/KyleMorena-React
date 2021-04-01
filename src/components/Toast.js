import React,{useEffect,useRef} from 'react';
import {Toast,Button} from 'react-bootstrap';
import ToastScss from './toast.module.scss';
import {useGlobalContext} from '../common/context';

const ToastComponent = () => {
  const {showToast,setShowToast,inputEmail,setHasAccount,} = useGlobalContext();
  const toast = useRef(null);

  const handleClose = () => {
    setShowToast(false)
    document.body.style.overflow="auto"
  };

  //#region Handle login/SignUp
  const handleLogin = () => {
    setShowToast(false)
    setHasAccount(true)
    inputEmail.current.scrollIntoView({
      behavior:'smooth',
      block:'center'
    });
    inputEmail.current.focus();
  };
  const handleSingup = () => {
    setShowToast(false)
    setHasAccount(false)
    inputEmail.current.scrollIntoView({
      behavior:'smooth',
      block:'center'
    });
    inputEmail.current.focus();
  };
  //#endregion

  const handleClickOutside = (e) => {
    if(toast.current && !toast.current.contains(e.target) && e.target.className!=='toast'){
      handleClose();
    }
  }
  useEffect(()=>{
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  })

  return (
    <>
      {
        setShowToast? (
          document.body.style.overflow="hidden",
          <div className={ToastScss['overlay']}>
            <Toast 
            onClose={handleClose} 
            show={showToast} 
            ref={toast}
            className={`${ToastScss['Toast']} p-2 m-0 bg-danger`}
            >
              <div className="d-flex justify-content-around">
                <Button onClick={handleLogin}>Accedi</Button>
                <Button onClick={handleSingup}>Registrati</Button>
                <Button onClick={handleClose}>X</Button>
              </div>
            </Toast>
          </div>
        ) : (
          null
        )
        
      }
    </>
  );
}

export default ToastComponent;
