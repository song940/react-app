import fs       from 'fs';
import babel    from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve  from "rollup-plugin-node-resolve";

const env = (e) => {
  return {
    intro: function(){
      return `
      if(typeof process === 'undefined'){
        var process = {};
      }
      if(window && typeof window.process === 'undefined'){
        window.process = process;
      }
      process.env = process.env || {};
      var rollupEnv = ${JSON.stringify(e)};
      Object.keys(rollupEnv).forEach(function(name){
        process.env[name] = rollupEnv[name];
      });
      `;
    }
  }
}

const babelrc = JSON.parse(
  fs.readFileSync('.babelrc')
);

export default {
  entry: "./app/main.jsx",
  plugins: [
    env({ NODE_ENV: "production" }),
    resolve({
      jsnext: true,
      extensions: [ '.js', '.jsx' ]
    }),
    commonjs(),
    babel(Object.assign(babelrc, {
      plugins: [ 'external-helpers' ]
    }))
  ],
  format: "iife",
  dest: "public/js/main.js"
};
