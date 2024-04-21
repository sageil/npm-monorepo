const devConfigs = require('@repo/tools/dev/dev.cjs');
const esbuildExtendedProps = {
  ...devConfigs.esbuild,
  outExtension: { '.js': '.cjs' },
  bundle:true,
};
devConfigs.esbuild = esbuildExtendedProps;

module.exports = {
  ...devConfigs
};