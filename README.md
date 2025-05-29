![Ingenuity](https://media.licdn.com/dms/image/v2/D4D16AQGj4lLnFrsCEw/profile-displaybackgroundimage-shrink_350_1400/B4DZcfdhfIG8AY-/0/1748579523773?e=1753920000\&v=beta\&t=Sy53x3iAAmKMdNEN8uHMfeqIWFXRKtO_VTP91U2gOfQ)

---

# Ingenuity

**Craft intelligence. Inspire innovation.**<br>
A powerful AI platform offering free token generation and inference—forever.

---

## Models Used

[![Gemini 1.5 Flash](https://img.shields.io/badge/Gemini%201.5%20Flash-4A90E2?style=flat-square)](https://ai.google.dev/models/gemini)
[![Qwen-32B](https://img.shields.io/badge/Qwen--32B-4A90E2?style=flat-square)](https://huggingface.co/Qwen/Qwen-32B)
[![LLaMA 3.3 70B](https://img.shields.io/badge/LLaMA--3.3--70B-4A90E2?style=flat-square)](https://ai.meta.com/blog/llama-3/)
[![DeepSeek R1](https://img.shields.io/badge/DeepSeek--R1--LLaMA--70B-4A90E2?style=flat-square)](https://huggingface.co/deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free)

---

## 🚀 Build with Ease

Ingenuity combines a sleek Node.js web interface with a high-performance C++ client to empower developers to build, experiment, and deploy AI solutions effortlessly.

### Architecture

* **Web App**: Node.js + Express-based interface (`server.js`, `template/`)
* **C++ Client**: High-performance native library (`cpp-client/`)
* **Templates**: Clean HTML/CSS UI components (`template/`)

---

## 🧪 Get Started

### Web Interface

**Requirements**

* Node.js (v14+)
* `npm`

**Setup**

```bash
npm install express cors dotenv axios
```

Create a `.env` file:

```
TOGETHER_API_KEY=your_api_key_here
```

Start the server:

```bash
node server.js
```

Open in your browser:
[http://localhost:3000](http://localhost:3000)

---

### C++ Client

```bash
cd cpp-client
mkdir build && cd build
cmake ..
make
./ingenuity_cpp_client
```

See full details in [`cpp-client/README.md`](cpp-client/README.md).

---

## 🛠 Troubleshooting

* Ensure dependencies are installed
* Confirm `.env` contains a valid API key
* Make sure port 3000 is available
* Check terminal logs for detailed errors

---

## 🔐 Built Securely

Ingenuity prioritizes safety with:

* Encrypted API key handling
* Rate limiting for fair usage
* Dependency & slopsquatting scans
* Content Security Policy (CSP)
* Input sanitization
* Hardened HTTP headers

---

## 🤝 Contribute

Want to shape the future of Ingenuity?

1. Fork the repo
2. Create a feature branch
3. Make & test your changes
4. Open a pull request

---

## 📄 License

Released under the MIT License.

> **Note**: If Vercel reports commit email issues, verify your Git email matches your GitHub account.

---

**Ingenuity** — Where code meets creativity.