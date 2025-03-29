# Code Language Translator

## Overview
The **Code Language Translator** is a web-based application that enables users to convert source code from one programming language to another using Google's **Gemini AI** model. This tool is ideal for developers looking to migrate code between languages efficiently.

## Features
- **Supports Multiple Languages:** Convert code between JavaScript, Python, Java, C++, C#, Ruby, Go, Rust, TypeScript, and PHP.
- **AI-Powered Translations:** Utilizes Google's Gemini AI to generate accurate code conversions.
- **Easy to Use:** Paste your source code, select source and target languages, and click translate.
- **Error Handling:** Notifies users of errors or missing input.

## Technologies Used
- **React.js**: Frontend framework for building UI components.
- **Google Gemini AI**: AI model for code translation.
- **JavaScript (ES6+)**: Main programming language.
- **CSS**: Styling for the interface.

## Installation
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v14+)
- npm or yarn

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repository/code-language-translator.git
   cd code-language-translator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up your environment variable:
   - Create a `.env` file in the root directory.
   - Add your Google Gemini API key:
     ```sh
     VITE_API_KEY=your_google_genai_api_key
     ```
4. Start the application:
   ```sh
   npm run dev
   ```

## Usage
1. Select the **Source Language** from the dropdown menu.
2. Paste your **Source Code** into the provided text area.
3. Select the **Target Language** for conversion.
4. Click the **Translate** button to generate the translated code.
5. View the output in the translated code section.

## Known Issues
- Some complex syntax might not translate perfectly.
- Error messages may need further refinement for edge cases.

## Future Enhancements
- Add more programming languages.
- Improve AI-generated translations.
- Implement a dark mode for better user experience.

## License
This project is licensed under the MIT License.

## Contributors
- Your Name ([Divyansh Kumar](https://github.com/divyansh14kr))

## Acknowledgments
- **Google Gemini AI** for powering the code translation.
- **React.js** community for resources and support.

---
Feel free to contribute or suggest improvements!
