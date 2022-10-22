import config from './config';

export default (self) => {
  return {
    config: config(self),
  };
};
