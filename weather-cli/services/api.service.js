import https from 'https';
import Storage from './storage.service.js';
import dotenv from "dotenv";
import axios from 'axios';


dotenv.config();


class ApiWeather { 
    constructor() {
      
    };
    // #_url = new URL('https://api.openweathermap.org/data/2.5/weather');
    #_url = 'https://api.openweathermap.org/data/2.5/weather';

   
  
    async getWeather(city) { 
        const token = await Storage.getKeyValue(process.env.TOKEN_NAME);
        if (!token) { 
            throw new Error("Don't added key API, for adding please write command -t[API_KEY]");
        }
        const { data } = await axios.get(this.#_url, {
            params: {
                q: city,
                appid: token,
                units: 'metric'
            }
        })
        // this.#_url.searchParams.append('q', city);
        // this.#_url.searchParams.append('appid', token);
        // this.#_url.searchParams.append('units', 'metric');

        // https.get(this.#_url, (response) => {
        //     let res = '';
        //     response.on('data', (chunk) => {
        //         res += chunk;
        //     });
        //     response.on('end', () => {
        //         console.log(res);
        //     });

        //     response.on('error', (error) => {
        //         console.log(error);
        //     });
        // });
        return data;
    };
};

export default new ApiWeather();
