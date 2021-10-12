import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Contact = () => {
    return (

<div class="contactme" id="contact">
    <div class="contactOverlay">
        <div class="container">



            <form action="" onSubmit="">
                <div class="formWord">
                     <h2>You want to support me, contribute or just leave a message !</h2>
                        <span>Full Name</span>
                     <br />
                        <input class="input100" type="text" name="fullName" required />
                    <br />
                        <span>Phone Number</span>
                    <br />
                        <input class="input100" type="text" name="phone" required />
                    <br />
                        <span>Enter Email</span>
                    <br />
                        <input class="input100" type="text" name="email" required />
                    <br />
                </div>
    
                <div class="formWord">
                        <span>Message</span>
                     <br />
                        <textarea name="message" required></textarea>
                    <br />
                        <button>Share the love</button>
                            <div class="row">All Done</div>
                </div>
            </form>
        </div>
    </div>
</div>

    )
}

export default Contact