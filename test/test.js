const incPropSrc = require('../src/inc');
const subPropSrc = require('../src/sub');

test('increment scores value by 5', () => {
  expect.assertions(1);
  return incPropSrc('./test/JSON/test.json', 'score', 5).then(inc => {
    expect(inc).toEqual(5);
  });
});

test('subtract scores value by 5', () => {
  expect.assertions(1);
  return subPropSrc('./test/JSON/test.json', 'score', 5).then(inc => {
    expect(inc).toEqual(0);
  });
});
