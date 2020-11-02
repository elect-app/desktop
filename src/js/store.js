const electron = require('electron');
const path = require('path');
const fs = require('fs');

class File {
    constructor(opts) {
      const userDataPath = (electron.app || electron.remote.app).getPath('userData');
      this.path = path.join(userDataPath, opts.fileName + '.json');
      
      this.data = parseDataFile(this.path, opts.defaults);
      this.fileName = opts.fileName;
    }
    
    get(key) {
      return this.data[key];
    }

    getDirect(key) {
      this.data = parseDataFile(this.path, opts.defaults);

      return this.data[key];
    }
    
    set(key, val) {
      this.data[key] = val;
      fs.writeFileSync(this.path, JSON.stringify(this.data));
    }

    clear() {
        this.data = {};
        fs.writeFileSync(this.path, JSON.stringify(this.data));
    }
}
  
function parseDataFile(filePath, defaults) {
    try {
      return JSON.parse(fs.readFileSync(filePath));
    } catch(error) {
        //File does not exist
      return defaults;
    }
}
  
// export the class
module.exports = File;