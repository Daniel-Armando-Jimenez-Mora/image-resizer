const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './input';
const outputDir = './output';

const squareSize = 60;

// Ensure the output directory exists
!fs.existsSync(outputDir) && fs.mkdirSync(outputDir);

// Process each image in the input directory
fs.readdirSync(inputDir).forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `resized_${file}`);

    sharp(inputPath)
        .resize(squareSize, squareSize, {
            fit: sharp.fit.contain,
            background: { r: 0, g: 0, b: 0, alpha: 0 }
        })
        .toFile(outputPath, (err, info) => {
            err
                ? console.error('Error while attempting to resize the image:\n', err)
                : console.log('Image resized successfully:\n', info)
            }
        );
});
