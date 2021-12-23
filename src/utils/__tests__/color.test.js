import { randomHexColorCode, RGBToHex } from '../color';
import { random } from '../index';

// test('randomHexColorCode', () => {
//   for (let index = 0; index < 1e3; index++) {
//     expect(/^#[a-zA-Z\d]{6}$/.test(randomHexColorCode())).toEqual(true);
//   }
// });

test('RGBToHex', () => {
  for (let index = 0; index < 1e3; index++) {
    expect(
      /^#[a-zA-Z\d]{6}$/.test(RGBToHex(random(255), random(255), random(255))),
    ).toEqual(true);
  }
});
