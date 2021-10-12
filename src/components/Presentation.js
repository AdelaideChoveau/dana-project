import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Presentation = () => {
    return (
<div>    

        <div className="header">
        
            <h2 className="bottom">DANA Project</h2>
            
                <nav>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Map</a></li>
                    <li><a href="#">Contact</a></li>
                </nav>
        </div> 


        <div class="hero">
        <div class="background-image"></div>
                <div class="hero-content-area">
                    <h1><Icon icon={locationIcon} className="logo-icon" /></h1>
                    <h2>Be Social.</h2>
                    <h3>Learn about the <mark>assocations</mark> of Barcelona.</h3>
                    
                    <h3>Work in progress <strong>Map</strong> that will filter all the associations by</h3>
                    <h4><li>name</li>
                    <li>localisation</li>
                    <li>category</li>
                    <li>available date</li>
                    </h4>
                   
                </div>
        </div>
</div> 
    )
}

export default Presentation