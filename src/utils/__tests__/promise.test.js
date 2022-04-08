test('promise', async () => {
  const p = await new Promise((resolve) => {
    resolve([1, 2, 3]);
  });
  console.log(JSON.parse(JSON.stringify(p)));
  console.log(p.map((item) => item * 2));
});

test('object', async () => {
  const foo = { id: 1 };
  const name = 'id';

  console.log(foo[name]);
  console.log('first'.startsWith('ff'));
});
