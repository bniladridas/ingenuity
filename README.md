# Ingenuity

Craft intelligence. Inspire innovation.  
A powerful AI platform offering free token generation and inference—forever.

## Build with Ease

Ingenuity combines a sleek Node.js web interface with a high-performance C++ client, designed to empower developers to create, experiment, and deploy AI effortlessly.

### What's Inside
- **Web App**: A Node.js/Express interface for seamless interaction (`server.js`, `template/`).
- **C++ Client**: A high-performance native library for advanced applications (`cpp-client/`).
- **Templates**: Clean HTML templates for the web interface (`template/`).

## Get Started

### Web Application
Bring your ideas to life in just a few steps.

#### Requirements
- Node.js (v14 or higher)
- npm

#### Setup
1. Install dependencies:
   ```bash
   npm install express cors dotenv axios
   ```
2. Create a `.env` file in the root directory:
   ```
   TOGETHER_API_KEY=your_api_key_here
   ```
3. Start the server:
   ```bash
   node server.js
   ```
4. Open `http://localhost:3000` in your browser.

### C++ Client
For high-performance needs, dive into the C++ client.

#### Quick Start
```bash
cd cpp-client
mkdir build && cd build
cmake ..
make
./ingenuity_cpp_client
```
See [C++ Client documentation](cpp-client/README.md) for more details.

## Troubleshoot with Confidence
If something’s not right:
- Verify dependencies are installed.
- Ensure your `.env` file has a valid API key.
- Check that port 3000 is free.
- Review console logs for errors.

## Built Securely
Ingenuity prioritizes safety with robust security features:
- Encrypted API keys for secure storage.
- Rate limiting to ensure fair use.
- Suspicious package and slopsquatting detection.
- Content Security Policy to prevent XSS attacks.
- Input sanitization to stop injection risks.
- Secure headers for enhanced protection.

## Join the Journey
Contribute to Ingenuity and shape the future of AI:
1. Fork the repository.
2. Create a feature branch.
3. Make and test your changes.
4. Submit a pull request.

## License
Proudly open-source under the MIT License.

**Note**: If Vercel raises commit author email issues, ensure your Git user email and name match your GitHub account.

---

Ingenuity. Where code meets creativity.