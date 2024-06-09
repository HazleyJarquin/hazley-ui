import postcss from 'rollup-plugin-postcss';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { terser } from '@rollup/plugin-terser';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: 'dist/hazley-ui.js',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/hazley-ui.umd.cjs',
      format: 'umd',
      name: 'HazleyUI',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: ['react', 'react-dom'],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    postcss({
      extract: 'styles.css',
      minimize: true,
    }),
    terser(),
  ],
};
