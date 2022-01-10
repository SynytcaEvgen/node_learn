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

const saveToken = async (token, value) => {
    try {
        const res = await Storage.saveKeyValue(token, value);
        if (!res) {
            PrintLog.success('Token has be saved')
        } else {
            throw new Error(res)
        }
    } catch (error) {
        PrintLog.error(error);
    }
};

const getForCast = async () => {
    try {
        const weather = await ApiWeather.getWeather(process.env.TOKEN_CITY); //Mykolayiv

        console.log(weather)

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
const initCLI = () => {
    const args = getArgs(process.argv);
    
    if (args.h) { 
        PrintLog.help();
    }
    if (args.s) { 
        getForCast();
    }
    if (args.t) { 
        saveToken(process.env.TOKEN_NAME, args.t);
    }
};

initCLI();