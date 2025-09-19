# Excel to JSON Converter with Next.js

A web application built with Next.js that allows users to easily convert Excel files (`.xlsx`, `.xls`) to JSON format. This tool provides a simple and user-friendly interface for uploading Excel files and downloading their contents as JSON, making it perfect for developers, data analysts, and anyone who needs to work with Excel data in JSON format.

## Features

- **Convert Excel to JSON:** Upload Excel files and get downloadable JSON output.
- **Modern UI:** Clean and responsive interface built with Next.js and TypeScript.
- **Fast & Efficient:** Handles large files quickly using efficient libraries.
- **Secure:** No data is stored on the server; all processing happens in the browser.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/imandaf/excel-to-json-converter-Next.js.git
   cd excel-to-json-converter-Next.js
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Open the application in your browser.
2. Click the "Upload" button and select your Excel file (`.xlsx` or `.xls`).
3. The application will display a preview and allow you to download the file as JSON.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [xlsx](https://www.npmjs.com/package/xlsx) (for Excel parsing)
- [React](https://react.dev/)

## Project Structure

```
.
├── components       # Reusable UI components
├── pages            # Next.js pages (entry points)
├── public           # Static files
├── styles           # CSS/SCSS files
├── utils            # Utility functions (e.g., Excel parsing)
├── README.md
├── package.json
└── ...
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- [imandaf](https://github.com/imandaf)

