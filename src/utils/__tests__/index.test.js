import { random } from '../index';
test('random', () => {
  for (let index = 0; index < 1e3; index++) {
    const result = random(10);
    expect(result < 10 && result >= 0).toEqual(true);
  }
});
