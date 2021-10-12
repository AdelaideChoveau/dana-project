import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import { Icon } from '@iconify/react'
import heartIcon from '@iconify/icons-mdi/heart-settings'

const Result = () => {
    return(
        <p>Your message has been successfully sent 👋</p>
    )
}

const Contact = () => {
    const [result,showResult] = useState(false);

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5z1b1ds', 'template_dvyxjse', e.target, 'user_i4hnuLomknEZTRZO15lu7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        showResult(true);
    };



    return (

<div class="contactme" id="contact">
    <div class="contactOverlay">
        <div class="container">
            <form action="" onSubmit={sendEmail}>
                <div class="formWord">
                     <h2><Icon icon={heartIcon} className="heart-icon" ></Icon>You can support us or leave a message !</h2>
                        <span>Full Name</span>
                     <br />
                        <input class="nameInput" type="text" name="fullName" required />
                    <br />
                        <span>Enter Email</span>
                    <br />
                        <input class="emailInput" type="text" name="email" required />
                    <br />
                </div>
    
                <div class="formWord">
                        <span>Message</span>
                     <br />
                        <textarea name="message" required></textarea>
                    <br />
                        <button>Share the love</button>
                            <div class="row">{result ? <Result/> : null}</div>
                </div>
            </form>
        </div>
    </div>
</div>

    )
}

export default Contact