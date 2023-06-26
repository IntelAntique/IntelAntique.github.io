import './Contact.css'
import {Link} from 'react-router-dom'
import emailjs from "@emailjs/browser"
import React, { useRef } from 'react';

export default function Contact(){
    
    return <h1 className='Contact_Me'>
        <h1 className />Find me here!
        <p className="Contact_Paragraph">
            If you found me interesting, feel free to use the feature below to contact me 
            or just click on any of those links
        </p>
        <ul className='Links'>
            <Link to="https://www.linkedin.com/in/han-yu-foong-670825254/"> LinkedIn </Link>
            <Link to="https://github.com/IntelAntique"> GitHub </Link>
        </ul>
        <p>
            Alternatively, you can use this box to message me.
        </p>
        <h6> Which is a work in progress right now... </h6>
        
    </h1>
}