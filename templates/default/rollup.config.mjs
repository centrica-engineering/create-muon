import merge from 'deepmerge';
import config from '@muons/library/rollup.config.mjs'

export default merge(config, {
  ...config
});