# Synthara AI

## Running the Software

### Prerequisites
- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation and Setup

1. **Install Dependencies**
   ```bash
   npm install express cors dotenv axios
   ```

2. **Create .env File**
   Create a file named `.env` in the root directory with your Together API key:
   ```
   TOGETHER_API_KEY=your_api_key_here
   ```

3. **Run the Server**
   ```bash
   node server.js
   ```

4. **Access the Application**
   Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

### Troubleshooting

If you encounter any issues:

- Make sure all dependencies are installed correctly
- Check that the `.env` file exists and contains a valid API key
- Ensure port 3000 is not being used by another application
- Check the console for any error messages
