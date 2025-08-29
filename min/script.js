// Language code to name mapping
const LANGUAGES = {
    en: "English", hi: "Hindi", te: "Telugu", ta: "Tamil", kn: "Kannada",
    ml: "Malayalam", mr: "Marathi", gu: "Gujarati", pa: "Punjabi", bn: "Bengali",
    or: "Odia", as: "Assamese", ur: "Urdu", ko: "Korean", es: "Spanish",
    fr: "French", de: "German", zh: "Chinese", ar: "Arabic", ru: "Russian"
};

function populateLanguages(selectElement) {
    for (const code in LANGUAGES) {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = LANGUAGES[code];
        selectElement.appendChild(option);
    }
}

const inputText = document.getElementById("inputText");
const targetLanguage = document.getElementById("targetLanguage");
const outputText = document.getElementById("outputText");
const translateBtn = document.getElementById("translateBtn");
const fileInput = document.getElementById("fileInput");
const downloadBtn = document.getElementById("downloadBtn");
const textStatusBar = document.getElementById("textStatusBar");

const speechTargetLanguage = document.getElementById("speechTargetLanguage");
const listenBtn = document.getElementById("listenBtn");
const speechOutput = document.getElementById("speechOutput");
const speechStatusBar = document.getElementById("speechStatusBar");

populateLanguages(targetLanguage);
populateLanguages(speechTargetLanguage);

async function translateText(text, targetLang, statusBar) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await fetch(url);
    const data = await res.json();
    const detectedLang = data[2] || "auto";
    statusBar.textContent = `Translating from ${LANGUAGES[detectedLang] || detectedLang} to ${LANGUAGES[targetLang]}`;
    return data[0].map(part => part[0]).join("");
}

translateBtn.addEventListener("click", async () => {
    const text = inputText.value.trim();
    if (!text) return;
    outputText.value = "Translating...";
    outputText.value = await translateText(text, targetLanguage.value, textStatusBar);
});

fileInput.addEventListener("change", async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    let text = "";
    if (file.type === "text/plain") {
        text = await file.text();
    } else if (file.type === "application/pdf") {
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        for (let i = 1; i <= Math.min(pdf.numPages, 5); i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            text += content.items.map(item => item.str).join(" ") + "\n";
        }
    } else if (file.name.endsWith(".docx")) {
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        text = result.value;
    } else {
        alert("Unsupported file type.");
        return;
    }

    inputText.value = text;
    outputText.value = "Translating...";
    outputText.value = await translateText(text, targetLanguage.value, textStatusBar);
});

downloadBtn.addEventListener("click", () => {
    const text = outputText.value.trim();
    if (!text) return;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "translated_text.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Speech Recognition
let recognition;
if ("webkitSpeechRecognition" in window) {
    recognition = new webkitSpeechRecognition();
} else if ("SpeechRecognition" in window) {
    recognition = new SpeechRecognition();
}

if (recognition) {
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onresult = async (event) => {
        const transcript = event.results[0][0].transcript;
        speechOutput.value = "Translating...";
        const translated = await translateText(transcript, speechTargetLanguage.value, speechStatusBar);
        speechOutput.value = translated;

        const utter = new SpeechSynthesisUtterance(translated);
        utter.lang = speechTargetLanguage.value;
        window.speechSynthesis.speak(utter);
    };

    recognition.onerror = () => {
        speechStatusBar.textContent = "Speech recognition error.";
    };

    recognition.onend = () => {
        listenBtn.textContent = "Start Listening";
    };

    listenBtn.addEventListener("click", () => {
        recognition.start();
        listenBtn.textContent = "Listening...";
    });
} else {
    listenBtn.disabled = true;
    listenBtn.textContent = "Speech Not Supported";
}
