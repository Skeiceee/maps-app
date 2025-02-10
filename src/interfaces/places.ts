export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:         string;
    type:       string;
    place_type: string[];
    relevance:  number;
    properties: Properties;
    text:       string;
    place_name: string;
    center:     number[];
    geometry:   Geometry;
    context:    Context[];
    bbox?:      number[];
}

export interface Context {
    id:          string;
    mapbox_id:   string;
    text:        string;
    wikidata?:   string;
    short_code?: ShortCode;
}

export enum ShortCode {
    Cl = "cl",
    ClRm = "CL-RM",
    ClVs = "CL-VS",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    accuracy?:  string;
    mapbox_id?: string;
}
