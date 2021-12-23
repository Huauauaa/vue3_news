import * as a from './a';
import * as b from './b';

export default { ...a, ...b };

export function random(max, min = 0) {
  return ~~(Math.random() * (max - min)) + min;
}
