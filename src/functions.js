const fs = require('fs');

function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

module.exports = {
  incProp: async function(filePath, property, incBy) {
    let inc = {};
    fs.readFile(filePath, 'utf8', (err, fileData) => {
      if (err) throw err;
      inc = JSON.parse(fileData);
      inc[property] += incBy;
      const data = JSON.stringify(inc, null, 2);
      fs.writeFile(filePath, data, err => {
        if (err) throw err;
      });
    });
    await sleep(100);
    return inc[property];
  },

  subProp: async function(filePath, property, subBy) {
    let inc = {};
    fs.readFile(filePath, 'utf8', (err, fileData) => {
      if (err) throw err;
      inc = JSON.parse(fileData);
      inc[property] -= subBy;
      const data = JSON.stringify(inc, null, 2);
      fs.writeFile(filePath, data, err => {
        if (err) throw err;
      });
    });
    await sleep(100);
    return inc[property];
  }
};
