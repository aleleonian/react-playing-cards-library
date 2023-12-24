// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/MyLibrary.jsx',
  output: {
    file: 'dist/MyLibrary.jsx',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }),
    postcss({
      extract: true, // Output CSS to a separate file
      modules: true, // Enable CSS modules if needed
    }),
  ],
};
