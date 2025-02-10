import axios from 'axios';

export const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoidmljdG9ybnVuZXoiLCJhIjoiY202dmVvZ2QyMDgwejJqb2xhNjU1d21rcSJ9.Z5uVeIF5FQAHSg7I-BMCAA'
    }
})