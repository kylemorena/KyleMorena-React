import React from 'react';
import {Navbar,Form,Button } from 'react-bootstrap'
import NavBarScss from './NavBar.module.scss';
import SearchBar from './NavBarComponents/SearchBar';
import {useGlobalContext} from '../context';
import Whishlist from './NavBarComponents/Whishlist';

const NavBar = () => {
  const {
    user,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    handleLogout,
    emailError,
    passwordError,
    hasAccount,
    setHasAccount
  } = useGlobalContext();
  return (
    <Navbar className={`${NavBarScss['navbar']} bg-primary m-0 p-0`} variant="dark">
      <Navbar.Brand href="/">
        <h1>Bookssss</h1>
      </Navbar.Brand>
      {
        user ? (
          <>
            <SearchBar />
            <Button onClick={handleLogout}>Logout</Button>
            {/* TODO: da creare il component */}
            <Whishlist />
          </>
        ) : (
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                autoFocus 
                required 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
              />
              <Form.Text className="text-warning">
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
              <Form.Text className="text-warning">
                {passwordError}
              </Form.Text>
            </Form.Group>
            <div className="btnContainer">
              {
                hasAccount ? (
                  <>
                    <Button onClick={handleLogin}>Sign in</Button>
                    <p>Don't have an account?
                      <span onClick={()=>setHasAccount(!hasAccount)}>Sing up</span>
                    </p>
                  </>
                ) : (
                  <>
                    <Button onClick={handleSignup}>Sign up</Button>
                    <p>Have an account?
                      <span onClick={()=>setHasAccount(!hasAccount)}>Sing in</span>
                    </p>
                  </>
                )
              }
            </div>
          </Form>
        )
      }
    </Navbar>
  )
}

export default NavBar;
