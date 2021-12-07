'use strict';

const fs = require('fs');
const path = require('path');

console.log('\nmoving index.html');

fs.readFile(
  path.join(__dirname, '..', 'client', 'index.html'),
  'utf-8',
  (err, content) => {
    if (err) {
      console.error(err);
    } else {
      const pathAligned = content
        .replace('./src/init/index.js', './bundle.min.js')
        .replace('./styles/index.css', './bundle.min.css');
      fs.writeFile(
        path.join(__dirname, '..', 'dist', 'index.html'),
        pathAligned,
        'utf-8',
        (err) => err && console.error(err),
      );
    }
  },
);
