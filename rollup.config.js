import vue from 'rollup-plugin-vue';
import scss from 'rollup-plugin-scss'
import buble from 'rollup-plugin-buble';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import replace from 'rollup-plugin-replace';

var _prod = process.env.NODE_ENV === 'production',
    _dest = process.env.DIR_DEST !== undefined ? process.env.DIR_DEST : 'www/';

export default {
    input: 'src/index.js',
    output: {
        file: _dest + 'js/bundle.js',
        format: 'iife',
        name: 'bundlevue'
    },
    plugins: [
        vue({ css: _dest + 'css/bundle_component.css' }),
        scss({ output: _dest + 'css/bundle.css' }),
        _prod === true ? buble() : false,
        nodeResolve({ browser: true, jsnext: true, main: true }),
        replace({
            'process.env.NODE_ENV': _prod === true ? "'production'" : "'dev'"
        }),
        commonjs(),
        _prod === true ? uglify() : false
    ]
};
