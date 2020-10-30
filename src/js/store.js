const electron = require('electron');
const path = require('path');
const fs = require('fs');

class File {
    constructor(opts) {
      const userDataPath = (electron.app || electron.remote.app).getPath('userData');
      this.path = path.join(userDataPath, opts.fileName + '.json');
      
      this.data = parseDataFile(this.path, opts.defaults);
    }
    
    get(key) {
      return this.data[key];
    }
    
    set(key, val) {
      this.data[key] = val;
      fs.writeFileSync(this.path, JSON.stringify(this.data));
      this.data = parseDataFile(this.path, opts.defaults);
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