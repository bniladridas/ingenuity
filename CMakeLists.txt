cmake_minimum_required(VERSION 3.10)
project(TogetherAPI)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Find required packages
find_package(CURL REQUIRED)
find_package(nlohmann_json 3.2.0 REQUIRED)

# Add executable
add_executable(together_api together_api.cpp)

# Link libraries
target_link_libraries(together_api PRIVATE CURL::libcurl nlohmann_json::nlohmann_json)
