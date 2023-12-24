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
            extract: true,
            modules: true,
        }),
        svgr(), // Handle SVG files
        copy({
            targets: [{ src: 'src/assets/**/*.woff', dest: 'dist/assets/woff' }],
            flatten: false,
        }),
        copy({
            targets: [{ src: 'src/assets/**/*.svg', dest: 'dist/assets/svg' }],
            flatten: false,
        })
    ]
};
