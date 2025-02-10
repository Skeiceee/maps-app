import { JSX, useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReduces } from "./placesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";
import { searchApi } from "../../apis/searchApi";
import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [ number, number ];
    isLoadingPlaces: boolean;
    places: Feature[];
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

const PlacesProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer(placesReduces, INITIAL_STATE)

  useEffect(() => {
    const getLocation = async () => {
      try {
        const lngLat = await getUserLocation();
        dispatch({ type: 'setUserLocation', payload: lngLat });
      } catch (error) {
        console.error('Error al obtener la ubicación:', error);
      }
    };
    getLocation();
  }, []);
  
  const searchPlacesbyTerm = async(query: string): Promise<Feature[]> => {

    if(query.length === 0) {
      dispatch({ type:'setPlaces', payload:[] })
      return []
    };
    if(!state.userLocation ) throw new Error("No hay ubicación del usuario.")

      dispatch({type: 'setLoadingPlaces'})

    const resp = await searchApi.get<PlacesResponse>(`/${query}.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    })

    dispatch({type: 'setPlaces', payload: resp.data.features})
    return resp.data.features
  }

  return (
    <PlacesContext.Provider value={{...state, searchPlacesbyTerm}}>
        { children }
    </PlacesContext.Provider>
  )
}

export default PlacesProvider
