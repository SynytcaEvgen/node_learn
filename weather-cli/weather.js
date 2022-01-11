#!/usr/bin/env node
import getArgs from "./helpers/args.js";
import PrintLog from "./services/log.service.js";
import Storage from "./services/storage.service.js";
import ApiWeather from './services/api.service.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
dotenv.config({ path: dirname(__filename) + '/.env' });


const saveData = async (key, value) => {
    try {
        const res = await Storage.saveKeyValue(key, value);
        if (!res) {
            PrintLog.success(`${key.charAt(0).toUpperCase() + key.slice(1)} has be saved`)
        } else {
            throw new Error(res)
        }
    } catch (error) {
        PrintLog.error(error);
    }
}
const cheackData = async (data) => {
    try {
        const weather = await ApiWeather.getWeather(data); 

        return true;

    } catch (err) {
        
        return false;
    }
};

const getForCast = async () => {
    try {
        const weather = await ApiWeather.getWeather(process.env.TOKEN_CITY);
        PrintLog.weather(weather, ApiWeather.getIcon(weather.weather[0].icon));

    } catch (error) {
        if (error?.response?.status == 404) {
            PrintLog.error('City not found')
        } else if (error?.response?.status == 401) {
            PrintLog.error('Bad token')
        } else { 
            PrintLog.error(error.message)
        }
    }
    
}
const initCLI = async () => {
    const args = getArgs(process.argv);
    
    if (args.h) { 
        return PrintLog.help();
    }
    if (args.s) { 
    
        if (await cheackData({ city: args.s })) {
            return saveData(process.env.CITY, args.s);
        } else { 
            return PrintLog.error(`City ${args.s} don't found, could please write some any different city by default Kyiv`);
        }
        
    }
    if (args.l) { 
        if (await cheackData({ city: args.s })) {
            return saveData(process.env.LAND, args.l);
        } else { 
            return PrintLog.error(`Language ${args.s} don't found, could please write some any different language by default English`);
        }
        
    }
    if (args.t) { 
        return saveData(process.env.TOKEN_NAME, args.t);
    }

    return getForCast();
};

initCLI();