# incrementJSON
[![Build Status](https://travis-ci.org/Abourass/incrementJSON.svg?branch=master)](https://travis-ci.org/Abourass/incrementJSON)

**A very small (*461 bytes gzipped!*) library for incrementing and subtracting values held in JSON files** ✨

This is just a super simple async library for incrementing / subtracting values held in JSON files

# Installation
NPM: 
  `npm i incrementjson --save`

Yarn: 
  `yarn add incrementjson -save`

Then just require it as per usual:

`const { incProp, subProp } = require('incrementjson');`

# Usage
To increment

`incProp('filePath', 'property', numberToIncrementBy);`

To subtract

`subProp('filePath', 'property', numberToSubtractBy);`

Both functions return the new value for you. 

# Examples
Increment Example

  `incProp('test.json', 'score', 5).then(result => {console.log(result);})`

Subtraction Example

  `subProp('test.json', 'score', 5).then(result => { {console.log(result);})`

# License

MIT © Antonio P. Bourassa