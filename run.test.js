const {getText} = require('./test');

test('returning name and matric', () => {
  const response = getText('marquis', 160708004);
  expect(response).toBe('Marquis with matric 160708004')
})