import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
}, 
{
  test: /\.less$/,
  use: [
      {
          loader: 'style-loader',
      }, {
          loader: 'css-loader',
          options: {
              sourceMap: true,
          },
      }, {
          loader: 'less-loader',
          options: {
              sourceMap: true,
          },
      },
  ]
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
