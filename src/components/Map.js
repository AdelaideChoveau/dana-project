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



/*

import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'

const Map = ({ eventData, center, zoom }) => {
    const markers = eventData.Map(ev => {
        if(ev.records[0].addresses_town === 'BARCELONA') {
            return <LocationMarker lat={ev.records[0].geo_epgs_4326_x[0]} lng={ev.records[0].geo_epgs_4326_y[0]} />
        }
        return null
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLEMAP_API_KEY }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}

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

export default Map */
