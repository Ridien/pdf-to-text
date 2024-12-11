# PDF to Text Converter

This Node.js script converts PDF files to plain text files. It uses the `pdf-parse` library to extract text content from PDF documents and saves it into `.txt` files.

## Prerequisites

- Node.js and npm (Node Package Manager) installed.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/pdf-to-text-converter.git 
   cd pdf-to-text-converter
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

## Usage

1. **Place your PDF files in the `input` directory.** Create this directory if it doesn't exist.

2. **Run the script from the command line, providing the path to the PDF file as an argument:**

   ```bash
   node index.js path/to/your/file.pdf 
   ```
   For Example:
   ```bash
   node index.js ./input/mydocument.pdf
   ```

   If the PDF is in the same directory as the script:
   ```bash
   node index.js mydocument.pdf
   ```

3. **Output:** The converted text files will be saved in the `output` directory.  The script will create this directory if it doesn't exist.  The filenames will match the original PDF filenames (without the `.pdf` extension), with any invalid characters replaced by hyphens.


## Dependencies

- `pdf-parse`:  Used for parsing PDF files and extracting text content.
- `node:fs/promises`: Provides asynchronous file system functionalities.
- `node:path`: Provides utilities for working with file and directory paths.


## Contributing

Contributions are welcome!  Feel free to submit pull requests for bug fixes, enhancements, or new features.


## License

This project is open-source.