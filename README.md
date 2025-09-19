# Excel to JSON Converter

A modern, browser-based tool that converts Excel files (.xlsx, .xls) to JSON format with a clean and intuitive interface.

## Features

- **Drag & Drop Upload**: Simply drag your Excel file onto the upload area or click to browse
- **Instant Conversion**: Converts Excel data to JSON format in real-time
- **Key-Value Mapping**: Uses Excel column headers as JSON keys with corresponding row data as values
- **JSON Preview**: View the converted JSON in a formatted, readable display
- **Download JSON**: Save the converted data as a .json file
- **Copy to Clipboard**: Quick copy functionality for easy sharing
- **Error Handling**: Clear error messages for invalid files or conversion issues
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

## How It Works

1. **Upload**: Select or drag an Excel file (.xlsx or .xls) into the upload area
2. **Convert**: The app automatically processes the first worksheet and converts it to JSON
3. **Preview**: View the formatted JSON output in the preview area
4. **Export**: Download the JSON file or copy it to your clipboard

## JSON Output Format

The converter uses the first row of your Excel sheet as column headers (keys) and maps each subsequent row to create JSON objects:

**Excel Data:**
\`\`\`
| Timestamp    | Email Address        | Name     |
|--------------|---------------------|----------|
| 121212.1212  | usermail@gmail.com  | John Doe |
| 131313.1313  | jane@example.com    | Jane Doe |
\`\`\`

**JSON Output:**
\`\`\`json
[
  {
    "Timestamp": 121212.1212,
    "Email Address": "usermail@gmail.com",
    "Name": "John Doe"
  },
  {
    "Timestamp": 131313.1313,
    "Email Address": "jane@example.com",
    "Name": "Jane Doe"
  }
]
\`\`\`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd excel-to-json-converter
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **xlsx** - Excel file parsing library
- **Lucide React** - Modern icon library

## Supported File Formats

- `.xlsx` (Excel 2007+)
- `.xls` (Excel 97-2003)

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Privacy & Security

- All file processing happens locally in your browser
- No data is uploaded to external servers
- Files are processed in memory and not stored anywhere

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
