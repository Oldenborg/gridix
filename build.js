const sass = require('sass');
const fs = require('fs');

const result = sass.renderSync({
  file: './src/main.sass',
  outputStyle: 'compressed',
});

fs.writeFileSync('./dist/gridix.min.css', result.css);
console.log('Build completed successfully.');
