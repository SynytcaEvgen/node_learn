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

   
  
    async getWeather(option) { 
       
        const {lang, city} = option;
        const token = await Storage.getKeyValue(process.env.TOKEN_NAME),
            cityName = await Storage.getKeyValue(process.env.CITY),
            langName = await Storage.getKeyValue(process.env.LAND);
    
        if (!token) { 
            throw new Error("Don't added key API, for adding please write command -t[API_KEY]");
        }
        if (!cityName) { 
            throw new Error("Don't added city, for adding please write command -s[CITY]");
        }
        // console.log(city || cityName || 'Kyiv');
        // console.log(token);
        // console.log(lang || langName || 'en');
        // try {
            
            
        // } catch (err) {
        //     return err.message
        // }
        const { data } = await axios.get(this.#_url, {
                params: {
                    q: city || cityName || 'Kyiv',
                    appid: token,
                    units: 'metric',
                    lang: lang || langName || 'en',
                }
            });
        return data;
    
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
       
        // return data;
    };

    getIcon(icon) { 
        switch (icon.slice(0, -1)) {
		case '01':
			return '☀️';
		case '02':
			return '🌤️';
		case '03':
			return '☁️';
		case '04':
			return '☁️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '❄️';
		case '50':
			return '🌫️';
	}

    }
};

export default new ApiWeather();
