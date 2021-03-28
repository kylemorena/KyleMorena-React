import React,{useEffect,useRef} from 'react'
import {Form,Button} from 'react-bootstrap';
import {useGlobalContext} from '../../common/context';

const FormLogRegister = () => {
  const inputEmail = useRef(null)
  const {
    user,
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
    <Form className="flex-fill text-white">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
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
          placeholder="Password" 
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
            <Button onClick={handleLogin} className="btn">Sign in</Button>
            <p>
              Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sing up</span>
            </p>
          </>
        ) : (
          <>
            <Button onClick={handleSignup} className="btn">Sign up</Button>
            <p>
              Have an account? <span className="border-bottom" onClick={()=>setHasAccount(!hasAccount)}>Sing in</span>
            </p>
          </>
        )
      }
    </Form>
    </>
  )
}

export default FormLogRegister
