#!/usr/bin/env node
import getArgs from "./helpers/args.js";
import PrintLog from "./services/log.service.js";
import Storage from "./services/storage.service.js"
const initCLI = () => {

    const args = getArgs(process.argv);


    if (args.h) { 
        PrintLog.help();
    }
    if (args.s) { 
        //Save city
    }
    if (args.t) { 
        Storage.saveKeyValue('', args.t)
    }
};

initCLI();