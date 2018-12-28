# incrementJSON

**A very small (1.9kB) library for incrementing and subtracting values held in JSON files** ✨

This is just a super simple async library for incrementing / subtracting values held in JSON files

# Installation
NPM: 
  `npm i incrementJSON --save`

Yarn: 
  `yarn add incrementJSON -save`

Then just require it as per usual:

`const incrementJSON = require('incrementJSON');`

# Usage
To increment

`incProp('filePath', 'property', numberToIncrementBy);`

To subtract

`subProp('filePath', 'property', numberToSubtractBy);`

Both functions return the new value for you. 

# Examples
Increment Example

`console.log(incProp('./test/JSON/test.json', 'score', 5));`

Subtraction Example

`console.log(subProp('./test/JSON/test.json', 'score', 5));`

# License

MIT © Antonio P. Bourassa