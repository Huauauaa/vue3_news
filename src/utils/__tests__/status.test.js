import Status from '../Status';

test('Status', () => {
  const s = new Status();
  console.log(typeof s);
  expect(s).toEqual('Status');
});
