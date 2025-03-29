import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

import './App.css';

function App() {
  const [sourceCode, setSourceCode] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('JavaScript');
  const [targetLanguage, setTargetLanguage] = useState('Python');
  const [translatedCode, setTranslatedCode] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

;
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY});
  


  const programmingLanguages = [
    'JavaScript', 'Python', 'Java', 'C++', 'C#', 'Ruby', 'Go', 'Rust', 'TypeScript', 'PHP'
  ];

  const handleSourceLanguageChange = (e) => setSourceLanguage(e.target.value);
  const handleTargetLanguageChange = (e) => setTargetLanguage(e.target.value);
  const handleSourceCodeChange = (e) => {
    setSourceCode(e.target.value);
    if (errorMessage) setErrorMessage('');
  };

  const clearSourceCode = () => {
    setSourceCode('');
    setErrorMessage('');
  };
  

  const translateWithGemini = async () => {
    if (!sourceCode.trim()) {
      setErrorMessage('Please enter some source code');
      return;
    }
   
  
    setIsTranslating(true);
    setErrorMessage('');
  
    try {
      const SLang = sourceLanguage;
      const DLang = targetLanguage;
      const code = sourceCode;
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `Convert this code ${code} to ${DLang}. Only return the converted code without any additional explanations or context. Also do not reply back with the language name.`,
});

      const filteredCode = response.text
      .split('\n') // Split the response into an array of lines
      .filter(line => !line.trim().startsWith('#')) // Remove comment lines
      .join('\n'); // Join the filtered lines back into a string
      
      

    console.log(filteredCode);

    setTranslatedCode(filteredCode);
  
  
    } catch (error) {
      console.error('Translation error:', error);
      setErrorMessage(`Translation failed: ${error.message}`);
    } finally {
      setIsTranslating(false);
    }
  };
  

  return (
    <div className="container">
      <h1>Code Language Translator</h1>

      <div className="translator-section">
        <div className="code-panel">
          <label htmlFor="sourceLanguage">Source Language:</label>
          <select id="sourceLanguage" value={sourceLanguage} onChange={handleSourceLanguageChange}>
            {programmingLanguages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          <textarea
            id="sourceCode"
            value={sourceCode}
            onChange={handleSourceCodeChange}
            placeholder="Paste your source code here..."
          ></textarea>

          <button className="clear-btn" onClick={clearSourceCode}>Clear</button>
        </div>

        <div className="middle-section">
          <button className="translate-btn" onClick={translateWithGemini} disabled={isTranslating}>
            {isTranslating ? 'Translating...' : 'Translate →'}
          </button>

          <div className="divider">
            <div className="divider-line"></div>
            <div className="divider-text">to</div>
            <div className="divider-line"></div>
          </div>
        </div>

        <div className="code-panel">
          <label htmlFor="targetLanguage">Target Language:</label>
          <select id="targetLanguage" value={targetLanguage} onChange={handleTargetLanguageChange}>
            {programmingLanguages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>

          <textarea
            id="targetCode"
            value={translatedCode}
            readOnly
            placeholder="Translated code will appear here..."
          ></textarea>
        </div>
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="about-section">
        <h2>About This Translator</h2>
        <p>
          This code translator converts programs between different programming languages using 
          Google's Gemini AI model. Enter your source code, select the languages, and click Translate.
        </p>

        <h3>Supported Languages:</h3>
        <div className="language-tags">
          {programmingLanguages.map(lang => (
            <span key={lang} className="language-tag">{lang}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
