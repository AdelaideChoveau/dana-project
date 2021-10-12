import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Presentation = () => {
    return (
<div>    

        <div className="header">
        
            <h2 className="bottom" ><a href="#map">DANA Project</a></h2>
            
                <nav>
                    <li><a href="#project">Project</a></li>
                    <li><a href="#map">Map</a></li>
                    <li><a href="#contact">Contact</a></li>
                </nav>
        </div> 


        <div class="hero" id="project">
        <div class="background-image"></div>
                <div class="hero-content-area">
                    <h1><a href="#map"><Icon icon={locationIcon} className="logo-icon" /></a></h1>
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