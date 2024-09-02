// src/utils/pdfToImage.js

import * as pdfjsLib from 'pdfjs-dist';

// Ensure the worker is correctly set up
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export const convertPdfToImage = async (pdfBuffer) => {
  const pdf = await pdfjsLib.getDocument({ data: pdfBuffer }).promise;
  const numPages = pdf.numPages;
  const images = [];

  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i);
    const viewport = page.getViewport({ scale: 1.5 });

    // Create a canvas to render the page
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = viewport.width;
    canvas.height = viewport.height;

    const renderContext = {
      canvasContext: context,
      viewport: viewport,
    };

    // Render the page to the canvas
    await page.render(renderContext).promise;

    // Convert canvas to an image URL
    const imageUrl = canvas.toDataURL('image/png');
    images.push(imageUrl);
  }

  return images;
};
