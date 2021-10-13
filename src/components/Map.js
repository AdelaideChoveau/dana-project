import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import AssociationInfoBox from './AssociationInfoBox'
import { enableCache } from '@iconify/react'

const Map = ({ records=[], center, zoom }) => {
    const [associationInfo, setAssociationInfo] = useState(null)


    const markers = records.map(ev => {
        if(ev.addresses_town === 'BARCELONA') {
            return <LocationMarker lat={ev.geo_epgs_4326_x} lng={ev.geo_epgs_4326_y} onClick={() => setAssociationInfo({ name: ev.name, tel: ev.values_value, area: ev.addresses_district_name })}/>
        }
        return null
    })

    console.log(markers)

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {associationInfo && <AssociationInfoBox info={associationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 41.390205,
        lng: 2.154007
    },
    zoom: 14
}

export default Map



/* antes 


import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ center, zoom }) => {

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
        
        <LocationMarker lat={center.lat} lng={center.lng} />
            </GoogleMapReact>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 41.390205,
        lng: 2.154007
    },
    zoom: 14
}

export default Map





 */
