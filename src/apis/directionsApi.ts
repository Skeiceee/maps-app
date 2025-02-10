import axios from 'axios';

export const directionsApi = axios.create({
    baseURL: `https://api.mapbox.com/directions/v5/mapbox/driving`,
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoidmljdG9ybnVuZXoiLCJhIjoiY202dmVvZ2QyMDgwejJqb2xhNjU1d21rcSJ9.Z5uVeIF5FQAHSg7I-BMCAA'
    }
})