const fs = require('fs');

function sleep(ms){
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function subProp(filePath, property, subBy) {
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
  await sleep(1000);
  return inc[property];
}

module.exports = subProp;
