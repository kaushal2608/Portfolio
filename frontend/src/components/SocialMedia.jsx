import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
    <a href="https://www.linkedin.com/in/kaushalkishor07/" target="_blank" rel="noopener noreferrer">
      <FaLinkedin />
      </a>
    </div>
    <div>
    <a href="https://instagram.com/veerahir__?igshid=OTk0YzhjMDVlZA==" target="_blank" rel="noopener noreferrer">
      <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;