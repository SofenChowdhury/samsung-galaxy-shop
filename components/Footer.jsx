import React from 'react';
import { AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 SAMSUNG GALAXY ALL rights reserved</p>
      <p className='icons'>
        <AiOutlineTwitter />
        <AiFillInstagram />
        <AiFillFacebook />
        <AiFillLinkedin />
      </p>
    </div>
  )
}

export default Footer