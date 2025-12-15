Longest Substring Without Repeating Characters

A complete solution for the Blockfuse Labs Cohort IV Test (Question 1) - finding the longest substring without repeating characters using the sliding window algorithm.

📋 Problem Statement

Given a string s, find the length of the longest substring that contains no repeated characters.

Constraints:

1 <= s.length <= 50,000
s consists of: lowercase letters, uppercase letters, digits, symbols, and spaces
🚀 Features

Optimal Algorithm: O(n) time complexity using sliding window technique
Two Functions:

lengthOfLongestSubstring(s): Returns the maximum length
findLongestSubstring(s): Returns the actual substring
Interactive Web Interface: Visualize results in browser
Comprehensive Test Suite: 9 test cases covering edge cases
Clean, Well-Documented Code: Follows best practices

📁 Project Structure

longest-substring/
├── src/
│   ├── longestSubstring.js    # Core algorithm implementation
│   └── test.js               # Test suite with 9 test cases
├── index.html                # Interactive web interface
├── style.css                 # Styling for web interface
├── app.js                    # Web application logic
├── README.md                 # This documentation
└── package.json             # Project configuration

🛠️ Installation & Setup

Prerequisites

Node.js - for running tests
Modern web browser - for the web interface

Step 1: Clone the Repository
git clone https://github.com/Lunga-Mashaba/Blockfuse_Labs_Question_1.git
cd longest-substring

Step 2: Run the Web Interface

Option A: Using VS Code Live Server (Recommended)

Open the project in VS Code
Install the "Live Server" extension if not already installed
Right-click on index.html → "Open with Live Server"
The application will open at http://localhost:5500

Option B: Direct File Access
Simply open index.html in your web browser
No server required for basic functionality

Step 3: Run the Test Suite
node src/test.js

🧪 Running Tests

The test suite includes 9 comprehensive test cases:

Test Cases Covered:

Basic example: "abcabcbb" → Length: 3, Substring: "abc"
All same characters: "bbbbb" → Length: 1, Substring: "b"
Overlapping windows: "pwwkew" → Length: 3, Substring: "wke"
Empty string: "" → Length: 0, Substring: ""
Single space: " " → Length: 1, Substring: " "
Two characters: "au" → Length: 2, Substring: "au"
Multiple duplicates: "dvdf" → Length: 3, Substring: "vdf"
Entire alphabet: "abcdefghijklmnopqrstuvwxyz" → Length: 26
Mixed characters: "abca123!@# 321" → Length: 9, Substring: "bca123!@#"

Running Tests:

# Run all tests
node src/test.js

# Expected output:
Testing Longest Substring Algorithm
✓ Test 1 PASSED: "abcabcbb" -> Length: 3, Substring: "abc"
✓ Test 2 PASSED: "bbbbb" -> Length: 1, Substring: "b"
✓ Test 3 PASSED: "pwwkew" -> Length: 3, Substring: "wke"
✓ Test 4 PASSED: "" -> Length: 0, Substring: ""
✓ Test 5 PASSED: " " -> Length: 1, Substring: " "
✓ Test 6 PASSED: "dvdf" -> Length: 3, Substring: "vdf"# 
✅ All tests passed!

🔧 API Reference

Core Functions

lengthOfLongestSubstring(s)

Returns the length of the longest substring without repeating characters.

Parameters:

s (string): Input string
Returns:

number: Maximum length found

findLongestSubstring(s)

Returns the actual longest substring without repeating characters.

Parameters:

s (string): Input string
Returns:

string: The longest substring found

🎨 Web Interface

The interactive web interface provides:

Input Field: Enter any string (supports all characters)
Calculate Button: Process the input string
Example Buttons: Quick test with predefined cases
Results Display: Shows both length and actual substring
Visual Feedback: Clean, responsive design
Features:

Real-time calculation
Visual highlighting of results
Mobile-responsive design
No external dependencies
🧠 Algorithm Explanation

Approach: Sliding Window with HashMap

Time Complexity: O(n)
Space Complexity: O(min(n, m)) where m is character set size

Algorithm Steps:

Initialize two pointers: start and end (both at 0)
Use a HashMap to store the last seen index of each character
Iterate through the string with end pointer:

If character exists in map and its index >= start, move start to index + 1
Update character's latest index in map
Update maximum length if current window is larger
Return maximum length found

Pseudocode:
function lengthOfLongestSubstring(s):
    if s.length == 0: return 0
    if s.length == 1: return 1
    
    maxLength = 0
    start = 0
    charIndexMap = new HashMap()
    
    for end = 0 to s.length - 1:
        currentChar = s[end]
        
        if charIndexMap.contains(currentChar) and charIndexMap[currentChar] >= start:
            start = charIndexMap[currentChar] + 1
        
        charIndexMap[currentChar] = end
        maxLength = max(maxLength, end - start + 1)
    
    return maxLength

    
