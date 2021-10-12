import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const Presentation = () => {
    return (
<div>    
    <div class="background-image"></div>
        <div className="header">
            <h2 className="bottom">DANA Project</h2>
                <nav>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Map</a></li>
                    <li><a href="#">Contact</a></li>
                </nav>
        </div> 


        <div class="hero">
                <div class="hero-content-area">
                    <h1><Icon icon={locationIcon} className="logo-icon" /></h1>
                    <h2>Be Social. Learn being in an assocation.</h2>
                    
                    <h3>A "still in progess" map that will filter all the associations in Barcelona by
                        
                    <li>name</li>
                    <li>localisation</li>
                    <li>category</li>
                    <li>available date</li>
                    
                    to contribute</h3>
                    <a href="#" class="btn">Explore</a>
                </div>
        </div>
</div> 
    )
}

export default Presentation