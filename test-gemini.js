// Test script for Gemini 2.5 Flash model
require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function testGeminiModel() {
  try {
    console.log('Testing Gemini 2.5 Flash model...');
    console.log('API Key (first 5 chars):', process.env.GEMINI_API_KEY.substring(0, 5) + '...');

    // Initialize the Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Test with the model name from your implementation
    const modelName = "gemini-1.5-pro";
    console.log('Using model:', modelName);

    const model = genAI.getGenerativeModel({ model: modelName });

    // Simple test prompt
    const prompt = "What are your capabilities as Gemini 1.5 Pro?";
    console.log('Test prompt:', prompt);

    console.log('Generating response...');
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    console.log('\nResponse from Gemini:');
    console.log('-------------------');
    console.log(response);
    console.log('-------------------');

    console.log('\nTest completed successfully!');
    console.log('Model is working correctly.');

    return { success: true, model: modelName, response };
  } catch (error) {
    console.error('\nError testing Gemini model:');
    console.error(error.message);

    // If there's a specific error about the model not being found, suggest alternatives
    if (error.message.includes('not found') || error.message.includes('not supported')) {
      console.log('\nTrying to list available models...');
      try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        console.log('You might want to try one of these models instead:');
        console.log('- gemini-1.5-flash');
        console.log('- gemini-1.5-pro');
        console.log('- gemini-pro');
      } catch (listError) {
        console.error('Could not list models:', listError.message);
      }
    }

    return { success: false, error: error.message };
  }
}

// Run the test
testGeminiModel();
