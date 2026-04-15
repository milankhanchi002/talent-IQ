import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {SignedIn ,SignIn, SignInButton, SignOutButton, SignedOut, UserButton} from "@clerk/clerk-react";

function App() {


  return (
    <>
      <h1>Welcome to APP</h1>
      <SignedOut>
      <SignInButton mode="modal">
        <button className="">Sign up please</button>
      </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton/>
      </SignedIn>

      <UserButton/>
      
      
      
    </>
  )
}

export default App
