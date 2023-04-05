import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';


const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href="https://discordapp.com/users/714113710951759882">
                    <FaDiscord />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/loirinhm/">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/ana-p-meira/'>
                    <BsLinkedin />  
                </a>      
            </div>
        </div>
    )
}

export default SocialMedia;