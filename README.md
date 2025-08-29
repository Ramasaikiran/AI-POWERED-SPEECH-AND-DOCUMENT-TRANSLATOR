# AI-Powered Speech and Document Translator
A professional **AI-powered translator** built with **JavaScript, Google Translate API, Web Speech API, and PDF/Docx parsers**. This project enables users to **translate speech, text, and documents** (PDF, Word) into multiple languages with real-time accuracy and accessibility features.
🌍 Breaking language barriers in communication, education, and business.
## ✨ Features
### 🔐 User Interaction
* Speech-to-Text: Real-time speech recognition using **Web Speech API**
* Text Translation: Instant translation via **Google Translate API**
* Multi-Language Support: Translate into 100+ languages
* Copy/Download Options: Easily export translated text
### 📄 Document Translation
* PDF Translation: Extract and translate text using **PDF.js**
* Word Translation: Support for `.docx` files via **Mammoth.js**
* File Uploads: Drag & drop or file picker upload
* Document Download: Export translated files as text
### 🖥️ Real-time Translation
* **Live Speech Translation**: Speak in one language, see results instantly in another
* **Continuous Mode**: Stream translations during longer speeches
* **Pronunciation Playback**: Text-to-Speech playback for translated output
### 🎨 Modern UI/UX
* Responsive, mobile-first design
* Clean interface with minimal distraction
* Dark/Light mode toggle
* Loading states and progress indicators
## 🏗️ Project Structure
ai-powered-speech-and-document-translator/
├── index.html        # Main entry point
├── style.css         # Styling (custom + modern theme)
├── script.js         # Core logic (speech, API calls, translations)
├── assets/           # Icons, images
├── libs/             # External libs (pdf.js, mammoth.js, etc.)
└── README.md         # Documentation
## 🚀 Quick Start
### Prerequisites
* **Node.js** (v16+) for running local servers
* A **Google Translate API key** (for text/document translation)
* Modern browser (Chrome recommended for Web Speech API)
### 1. Clone Repository
git clone https://github.com/Ramasaikiran/AI-POWERED-SPEECH-AND-DOCUMENT-TRANSLATOR.git
cd AI-POWERED-SPEECH-AND-DOCUMENT-TRANSLATOR
### 2. Open Locally
Simply open `index.html` in a browser, or run a local server:
bash
npx http-server
Access at: `http://localhost:8080
## 🔧 Configuration

Update your **Google Translate API key** in `script.js`:
const API_KEY = "YOUR_GOOGLE_TRANSLATE_API_KEY";
## 📊 Core Functionalities

### Speech Translation

* 🎤 Speak → Get live translation in target language
* 🔊 Playback translated audio

### Document Translation

* 📑 Upload `.pdf` or `.docx` → Extract & translate text
* 💾 Export translated result as `.txt`

### Text Translation
* ⌨️ Enter text → Get instant translation
## 🎨 UI Components

* **Navbar** → Quick access to modes (Speech, Text, Document)
* **Translator Box** → Input + Output with language selectors
* **Upload Section** → File uploads (PDF/Word)
* **Live Output Panel** → Displays speech/document translations in real time
## 🔒 Security Features

* Input sanitization (prevent XSS)
* API key stored securely via environment variables in production
* CORS protection (for API requests)
## 🚀 Deployment

### GitHub Pages

1. Push repo to GitHub
2. Enable Pages in repo settings
3. App accessible at:
   `https://yourusername.github.io/AI-POWERED-SPEECH-AND-DOCUMENT-TRANSLATOR`

### Netlify / Vercel

 Deploy directly via drag & drop or GitHub integration

 🧪 Testing

bash
# Run unit tests (if added)
npm test
Browser tests recommended:

* Chrome for Web Speech API
* Edge/Firefox for PDF.js & Mammoth.js
# 📈 Future Enhancements

* 🌐 Offline translation support (with local ML models)
* 📲 Mobile PWA (Progressive Web App) version
* 🧑‍🤝‍🧑 Multi-user collaboration (real-time translated chats)
* 🎥 Video subtitle translation (YouTube-style captions)
 🤝 Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/awesome-feature`)
3. Commit changes (`git commit -m 'Add awesome feature'`)
4. Push branch (`git push origin feature/awesome-feature`)
5. Open Pull Request

 #📄 License

This project is licensed under the **MIT License**.

 #👥 Team

Frontend & UI → HTML, CSS, JavaScript
Backend & APIs → Google Translate API, Web Speech API, PDF.js, Mammoth.js
Design** → Clean, responsive dashboard-style UI

# 🔗 Links

GitHub Repository → [AI-POWERED-SPEECH-AND-DOCUMENT-TRANSLATOR](https://github.com/Ramasaikiran/AI-POWERED-SPEECH-AND-DOCUMENT-TRANSLATOR)
