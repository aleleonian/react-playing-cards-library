// rollup.config.js
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import svgr from '@svgr/rollup';
import copy from 'rollup-plugin-copy';

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
            // extract: true, // Extract CSS to separate file
            modules: true, // Enable CSS modules if needed
            // minimize: true, // Minify the CSS
          }),
        svgr(), // Handle SVG files
        copy({
            targets: [{ src: 'src/assets/**/*.woff', dest: 'dist/' }],
            flatten: false,
        }),
        copy({
            targets: [{ src: 'src/assets/**/*.svg', dest: 'dist/' }],
            flatten: false,
        }),
        copy({
            targets: [{ src: 'src/assets/**/*.png', dest: 'dist/' }],
            flatten: false,
        }),
        copy({
            targets: [{ src: 'src/assets/**/*.css', dest: 'dist/' }],
            flatten: false,
        })
    ]
};
