const fs = require('node:fs/promises');
const path = require('node:path');
const pdfParse = require('pdf-parse');

const outputFolder = './output';

async function processPdf(filePath) {
  try {
    const files = await fs.readdir('./input');

    const buffer = await fs.readFile(filePath);
    const data = await pdfParse(buffer);

    const text = data.text;
    const fileName = path.basename(filePath, '.pdf'); 
    const sanitizedTitle = fileName.replace(/[/\\?%*:|"<>]/g, '-'); 
    const textFilePath = path.join(outputFolder, `${sanitizedTitle}.txt`);
    await fs.writeFile(textFilePath, text);
    const pdfFileName = path.basename(filePath);
    console.log(`Successfully processed ${pdfFileName}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

const fileName = process.argv[2];

if(process.argv[2]){
  processPdf(fileName);
} else {
  console.error('Please provide a PDF file path as a command line argument.');
    process.exit(1);
}

