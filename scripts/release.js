const mxDesignRelease = require('@mx-design/release');

const {
  addTag,
  build,
  compose,
  getNextVersion,
  gitPush,
  publishNpm,
  setChangelog,
  updateVersion,
} = mxDesignRelease;

// getNextVersion 获取下个版本号函数
// updateVersion 修改版本号 返回值是回退版本号的函数
// gitPush push代码函数
// setChangelog 设置changeLog函数
// build 执行npm run build函数
// publish 执行npm publish函数
// addTag 打tag函数
// compose函数组合器

// 使用方法，这些函数顺序可以自己换位置，或者增删减
const middle = [
  getNextVersion,
  updateVersion,
  setChangelog,
  build,
  // publishNpm,
  addTag,
  gitPush,
];

function execRelease() {
  compose(middle);
}

execRelease();
