async function foo(name) {
  return await import(`../${name}`);
}

async function bar(name) {
  const result = await import(`../${name}`);
  return result.default;
}

test('module', async () => {
  const { default: fn } = await foo('c');
  const fn2 = await bar('c');

  fn();
  fn2();
});
