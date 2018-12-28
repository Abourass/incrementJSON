const incProp = require('../src/inc');
const subProp = require('../src/sub');

test('increment scores value by 5', () => {
  expect.assertions(1);
  return incProp('./test/JSON/test.json', 'score', 5).then(inc => {
    expect(inc).toEqual(5);
  });
});

test('subtract scores value by 5', () => {
  expect.assertions(1);
  return subProp('./test/JSON/test.json', 'score', 5).then(inc => {
    expect(inc).toEqual(0);
  });
});
