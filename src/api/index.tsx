export interface GeoApiOptions {
    method: "GET";
    headers: {
      "X-RapidAPI-Key": string;
      "X-RapidAPI-Host": string;
    };
  }
  
  export const geoApiOptions: GeoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY as string, 
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  
  export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  
  export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
  export const weatherApiKey= process.env.REACT_APP_WEATHER_API_KEY; 
  