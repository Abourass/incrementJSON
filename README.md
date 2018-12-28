# incrementJSON
[![Build Status](https://travis-ci.org/Abourass/incrementJSON.svg?branch=master)](https://travis-ci.org/Abourass/incrementJSON)

**A very small (1.9kB *before gzip!*) library for incrementing and subtracting values held in JSON files** ✨

This is just a super simple async library for incrementing / subtracting values held in JSON files

# Installation
NPM: 
  `npm i incrementjson --save`

Yarn: 
  `yarn add incrementjson -save`

Then just require it as per usual:

`const incJS = require('incrementjson');`

# Usage
To increment

`incJS.incProp('filePath', 'property', numberToIncrementBy);`

To subtract

`incJS.subProp('filePath', 'property', numberToSubtractBy);`

Both functions return the new value for you. 

# Examples
Increment Example

`console.log(incJS.incProp('./test/JSON/test.json', 'score', 5));`

Subtraction Example

`console.log(incJS.subProp('./test/JSON/test.json', 'score', 5));`

# License

MIT © Antonio P. Bourassa