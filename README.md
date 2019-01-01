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

```javascript
const { incProp, subProp } = require('incrementjson');
```

# Usage
To increment

```javascript
incProp('filePath', 'property', numberToIncrementBy);
```

* `incProp` (short for incrementProperty) invokes the increment function. 
* `'filePath'` is a string to the json file you want to increment a value in. 
* `'property'` is the JSON property whose value you want to increment (ex. 'score', 'employeeID')
* `numberToIncrementBy` is the number you want to increment by

To subtract

```javascript
subProp('filePath', 'property', numberToSubtractBy);
```
* `subProp` (short for subtractProperty) invokes the subtract function. 
* `'filePath'` is a string to the json file you want to subtract a value in. 
* `'property'` is the JSON property whose value you want to subtract (ex. 'score', 'employeeID')
* `numberToIncrementBy` is the number you want to subtract by

Both functions return the new value for you as the result of a promise. This means you **have to use** `.then(result=> {};`

# Examples
Increment Example

```javascript
incProp('test.json', 'score', 5).then(result => {console.log(result);})
```

Subtraction Example

```javascript
subProp('test.json', 'score', 5).then(result => { {console.log(result);})
```

# License

MIT © Antonio P. Bourassa
