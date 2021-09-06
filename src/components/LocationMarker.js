import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationMarker = ({ lat, lng, onClick }) => {
    console.log(lat,lng)
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker

