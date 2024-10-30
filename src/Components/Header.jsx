import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
function Header() {
  return (
    <header className='flex justify-between items-center h-[50px]'>
              <div id='rightSide' >
                            <div>
                            <FaFacebook />
                            </div>
                            <div>
                            <FaLinkedin />
                            </div>
                            <div>
                            <FaInstagram />
                            </div>
              </div>
    </header>
  )
}

export default Header