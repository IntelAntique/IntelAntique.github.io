import './Contact.css'
import {Link} from 'react-router-dom'
import emailjs from "@emailjs/browser"
import React, { useRef } from 'react';

export default function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1thivhf', 'template_typ9jfx', form.current, 'KVDeSsdK7mZamCtq7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return <h1 className='Contact_Me'>
        <h1> Find me here! </h1>
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

        <form className='Contact_Form' ref={form} onSubmit={sendEmail}>
            <input className="form-control input-sm" type="text" placeholder='Name' name="from_name" />
            <input className="form-control input-sm" type="email" placeholder='Email' name="to_name" />
            <textarea className="form-control input-sm" placeholder='Message' name="message" />
            <input className="form-control input-sm" type="submit" value="Send" />
        </form>
        
    </h1>
}