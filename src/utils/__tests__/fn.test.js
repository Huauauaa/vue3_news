const foo = {
  refresh: (...args) => {
    console.log(args);
  },
};

test('function', () => {
  console.log(typeof foo.refresh);
  foo.refresh({ id: 1 });
});
