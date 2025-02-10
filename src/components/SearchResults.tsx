import { useContext, useState } from "react"

import { Feature } from "../interfaces/places"

import { PlacesContext } from "../context/places/PlacesContext"
import { MapContext } from "../context/map/MapContext"

import LoadingPlaces from "./LoadingPlaces"

const SearchResults = () => {

    const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext)
    const { map, getRouterBetweenPoints } = useContext(MapContext)

    const [activeId, setActiveId] = useState('')

    const onPlaceClick = ( place: Feature ) => {
        const [ lng, lat ] = place.center
        setActiveId(place.id)
        map?.flyTo({
            zoom: 14,
            center: [ lng, lat ]
        })
    }

    const getRoute = (place: Feature) => {
        if (!userLocation) return;
        const [lng, lat] = place.center
        getRouterBetweenPoints(userLocation, [lng, lat])
    }

    if ( isLoadingPlaces ) {
        return (
            <LoadingPlaces/>
        )
    }

    if ( places.length === 0) {
        return <></>
    }

    return (
        <ul className="list-group mt-2">
            {
                places.map((place) => {
                    return (
                        <li 
                            key={ place.id } 
                            className={`list-group-item list-group-item-action mt-2 border pointer ${ activeId === place.id ? 'active' : '' }`} 
                            onClick={() => onPlaceClick(place)}
                        >
                            <h6>{ place.text }</h6>
                            <p
                                style={{ fontSize: 12 }}
                            >
                                { place.place_name }
                            </p>

                            <button onClick={ ()=>getRoute(place) } className={`btn ${ activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary' } `} >Direcciones</button>
                        </li>

                    )
                })
            }
        </ul>
    )
}

export default SearchResults