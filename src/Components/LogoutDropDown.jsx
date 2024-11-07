"use client"
import { signOut } from 'auth'
import React from 'react'
import { SlLogout } from 'react-icons/sl'

function LogoutDropDown() {
  return (
    <form className="flex justify-center items-center gap-3" action={async () => {
          await signOut()
      }}>
        <SlLogout />
        <button type="submit">
          Logout
        </button>
      </form>
  )
}

export default LogoutDropDown
