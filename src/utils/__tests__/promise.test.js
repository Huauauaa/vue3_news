test('promise', async () => {
  const p = await new Promise((resolve) => {
    resolve([1, 2, 3]);
  });
  console.log(JSON.parse(JSON.stringify(p)));
  console.log(p.map((item) => item * 2));
});
