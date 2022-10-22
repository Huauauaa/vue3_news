export default ({ env }) => {
  if (env === 'ningxia') {
    return [{ label: '1111' }];
  }
  return [{ label: '22222' }];
};
