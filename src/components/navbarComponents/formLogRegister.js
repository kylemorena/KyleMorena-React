import React,{useEffect,useRef} from 'react'
import {Form,Button} from 'react-bootstrap';
import {useGlobalContext} from '../../common/context';

const FormLogRegister = () => {
  const inputEmail = useRef(null)
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    emailError,
    passwordError,
    hasAccount,
    setHasAccount,
    setInputEmail
  } = useGlobalContext();

  useEffect(() => {
    setInputEmail(inputEmail)
  }, [setInputEmail])

  return (
    <>
    <Form className="text-white mt-3 pr-4">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="email..." 
          autoFocus 
          required 
          ref={inputEmail}
          value={email} 
          onChange={(e)=>setEmail(e.target.value)} 
        />
        <Form.Text className="text-dark">
          {emailError}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          placeholder="password..." 
          required
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Form.Text className="text-dark">
          {passwordError}
        </Form.Text>
      </Form.Group>
      {
        hasAccount ? (
          <>
            <Button onClick={handleLogin} className="btn mb-1">Accedi</Button>
            <p>
              Non hai un account? <span onClick={()=>setHasAccount(!hasAccount)}>Registrati</span>
            </p>
          </>
        ) : (
          <>
            <Button onClick={handleSignup} className="btn mb-1">Registrati</Button>
            <p>
              Hai già un account? <span className="border-bottom" onClick={()=>setHasAccount(!hasAccount)}>Accedi</span>
            </p>
          </>
        )
      }
    </Form>
    </>
  )
}

export default FormLogRegister
