#include <iostream>
#include <string>
#include <fstream>
#include <sstream>
#include <curl/curl.h>
#include <nlohmann/json.hpp>
#include <unordered_map>

using json = nlohmann::json;

// Function to load environment variables from .env file
std::unordered_map<std::string, std::string> loadEnvFile(const std::string& filePath = ".env") {
    std::unordered_map<std::string, std::string> envVars;
    std::ifstream envFile(filePath);

    if (envFile.is_open()) {
        std::string line;
        while (std::getline(envFile, line)) {
            // Skip empty lines and comments
            if (line.empty() || line[0] == '#') {
                continue;
            }

            // Find the equals sign
            size_t pos = line.find('=');
            if (pos != std::string::npos) {
                std::string key = line.substr(0, pos);
                std::string value = line.substr(pos + 1);

                // Remove any trailing whitespace from key
                key.erase(key.find_last_not_of(" \t") + 1);
                // Remove any leading whitespace from value
                value.erase(0, value.find_first_not_of(" \t"));

                envVars[key] = value;
            }
        }
        envFile.close();
    } else {
        std::cerr << "Warning: Could not open .env file at " << filePath << std::endl;
    }

    return envVars;
}

// Callback function to write response data from curl
static size_t WriteCallback(void* contents, size_t size, size_t nmemb, std::string* s) {
    size_t newLength = size * nmemb;
    try {
        s->append((char*)contents, newLength);
        return newLength;
    } catch(std::bad_alloc& e) {
        // Handle memory problem
        return 0;
    }
}

class Together {
private:
    std::unordered_map<std::string, std::string> envVars;
    std::string apiKey;

public:
    Together() {
        // Initialize curl once per program
        curl_global_init(CURL_GLOBAL_ALL);

        // Load environment variables
        envVars = loadEnvFile();

        // Get API key from environment variables
        if (envVars.find("TOGETHER_API_KEY") != envVars.end()) {
            apiKey = envVars["TOGETHER_API_KEY"];
        } else {
            std::cerr << "Warning: TOGETHER_API_KEY not found in .env file" << std::endl;
            apiKey = "YOUR_API_KEY"; // Fallback
        }
    }

    ~Together() {
        // Clean up curl
        curl_global_cleanup();
    }

    std::string createChatCompletion(const std::string& model, const std::string& userMessage) {
        CURL* curl = curl_easy_init();
        std::string readBuffer;

        if(curl) {
            // Set API endpoint
            curl_easy_setopt(curl, CURLOPT_URL, "https://api.together.xyz/v1/chat/completions");

            // Set headers
            struct curl_slist* headers = NULL;
            headers = curl_slist_append(headers, "Content-Type: application/json");

            // Add API key from .env file
            std::string authHeader = "Authorization: Bearer " + apiKey;
            headers = curl_slist_append(headers, authHeader.c_str());
            curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);

            // Create JSON payload
            json payload = {
                {"model", model},
                {"messages", json::array({
                    {{"role", "user"}, {"content", userMessage}}
                })}
            };

            std::string jsonStr = payload.dump();

            // Set request body
            curl_easy_setopt(curl, CURLOPT_POSTFIELDS, jsonStr.c_str());

            // Set write function callback
            curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION, WriteCallback);
            curl_easy_setopt(curl, CURLOPT_WRITEDATA, &readBuffer);

            // Perform the request
            CURLcode res = curl_easy_perform(curl);

            // Check for errors
            if(res != CURLE_OK) {
                std::cerr << "curl_easy_perform() failed: " << curl_easy_strerror(res) << std::endl;
                return "";
            }

            // Clean up
            curl_slist_free_all(headers);
            curl_easy_cleanup(curl);

            // Parse the JSON response
            try {
                json response = json::parse(readBuffer);
                return response["choices"][0]["message"]["content"];
            } catch (json::parse_error& e) {
                std::cerr << "JSON parse error: " << e.what() << std::endl;
                return "";
            }
        }

        return "";
    }
};

int main() {
    // Create Together client (this will load API key from .env file)
    Together client;

    std::cout << "Sending request to Together API..." << std::endl;

    std::string response = client.createChatCompletion(
        "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
        "What are some fun things to do in New York?"
    );

    std::cout << "\nResponse from API:\n" << response << std::endl;

    return 0;
}
