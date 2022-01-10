import { homedir } from 'os';
import { join, basename } from 'path';
import { promises } from 'fs';
import dotenv from "dotenv";


dotenv.config();

class Storage { 
  constructor() { 
    this._filePath = join(homedir(), process.env.NAME_TOKEN_FILE);
  }
  
  async saveKeyValue(key, value) { 
    // console.log(basename(this._filePath));
    // console.log(dirname(this._filePath));
    // console.log(extname(this._filePath));
    // console.log(relative(this._filePath, dirname(this._filePath))); // относиьельные пути одного файл от другого
    // console.log(isAbsolute(this._filePath)); //проверяет на обсолютностю путь
    // console.log(resolve('.')); //проверяет на обсолютностю путь
    // console.log(sep); //сераратор путей в зависимости от операционной сситемі они бівают разные
    let data = {};
    
    try {
      if (await this.isExist(this._filePath)) { 
        let file = await promises.readFile(this._filePath);
        data = JSON.parse(file);
      }
      if (value === true) {
        throw new Error('Please entring same token key');
      }
      data[key] = value;
      await promises.writeFile(this._filePath, JSON.stringify(data));
      // return true;
      
    } catch (error) {
      return error;
    }
    
  }

  async getKeyValue(key) { 
    if (await this.isExist(this._filePath)) { 
      let file = await promises.readFile(this._filePath);
      const data = JSON.parse(file);
      return data[key];
    }
    return undefined;
  };

  async isExist(path) { 
    try {
      await promises.stat(path);
      return true;
    } catch (error) {
      // console.error(error)
      return false;
      
    }
  }

}

export default new Storage();
