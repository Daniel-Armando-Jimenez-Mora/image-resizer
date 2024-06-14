# Image Resizer Project

This project provides a simple Node.js script to resize images and ensure they are square, filling empty spaces with a transparent background if needed. The script uses the `sharp` library to handle image processing.

## Features

- Resize images to a square dimension.
- Fill empty spaces with a transparent background.
- Maintain the original aspect ratio of the image.
- Supports multiple image formats (JPEG, PNG, WebP, AVIF, TIFF, GIF).

## Prerequisites

- [Node.js](https://nodejs.org/) (Ensure Node.js is installed on your system)
- [npm](https://www.npmjs.com/) (Node Package Manager, comes with Node.js)

## Getting Started

### Installation
1. **Clone the repository**:
2. **Open a terminal and change to the project directory**
3. **Install the dependencies:**
   **npm install**

### Usage
1. **Open the script:**
   **Open the resizeImage.js script file in a terminal or your referred text editor.**
2. **Run the script**
   **npm start**

### Explanation of the Script
* Input and Output Paths:
   * 'inputDir' is the directory containing the input images. In this example, it is set to './input'.
   * 'outputDir' is the directory where the resized images will be saved. In this example, it is set to './output'.
* Square Size:
   * 'squareSize' is set to 60, meaning the resized image will be 60x60 pixels.
* Sharp Resize Options:
   * 'fit: sharp.fit.contain' ensures the image fits within the specified dimensions without cropping.
   * 'background: { r: 0, g: 0, b: 0, alpha: 0 }' sets the background to transparent for any empty space.
