import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
import webpack from 'webpack'

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  // отключаем рекламу инструментов разработчика React
  new webpack.DefinePlugin({
    '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
  }),
]
