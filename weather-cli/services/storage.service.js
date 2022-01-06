import { homedir } from 'os';
import { join, basename, dirname } from 'path';


class Storage { 
    constructor() { 
      this.filePath = join(homedir(), '../weather-data.json');
    }
    
    saveKeyValue(key, value) { 

        // console.log(this.filePath)
        console.log(basename(this.filePath));
    }

}

export default new Storage();
