function duration(minutes, seconds) {
  return minutes * 60 + seconds;
}

function meanDuration(times) {
  const all = times.reduce((result, current) => {
    result += duration(...current);
    return result;
  }, 0);
  return all / times.length;
}

test('range time', () => {
  const times1 = [
    [5, 42],
    [5, 42],
    [6, 42],
  ];
  const times2 = [
    [9, 57],
    [8, 42],
    [9, 42],
  ];

  const mean1 = meanDuration(times1);
  const mean2 = meanDuration(times2);

  const max = Math.max(mean1, mean2);
  const min = Math.min(mean1, mean2);

  console.log(mean1, mean2, max - min, (max - min) / max);
});
