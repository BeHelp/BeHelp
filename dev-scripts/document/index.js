const documentDirectory = require('./document-directory');
const visualizeDirectory = require('./visualize-directory');

for (const dirName of process.argv.slice(2)) {
  documentDirectory(dirName, {}).catch((err) => console.error(err));
  visualizeDirectory(dirName, {}).catch((err) => console.error(err));
}

visualizeDirectory('index.js', {
  options: {
    outputType: 'dot',
    doNotFollow: {
      path: 'node_modules',
    },
    maxDepth: 1,
    reporterOptions: {
      dot: {
        collapsePattern: '^(node_modules/[^/]+)',
      },
    },
    exclude: '(sandbox.js|(\\S)+.spec.js|dev-scripts|dev.js)',
  },
  filePrefix: 'entry-point',
}).catch((err) => console.error(err));

documentDirectory('', {
  ignore: ['dev-scripts', 'docs'],
  maxDepth: 1,
  fileName: 'README',
  graphPrefix: 'entry-point',
  title: 'Deployment Entry Point',
}).catch((err) => console.error(err));
