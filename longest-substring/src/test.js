const { lengthOfLongestSubstring, findLongestSubstring } = require('./longestSubstring');

console.log("Testing Longest Substring Algorithm\n");

const tests = [
    { input: "abcabcbb", expectedLength: 3, expectedSubstring: "abc" },
    { input: "bbbbb", expectedLength: 1, expectedSubstring: "b" },
    { input: "pwwkew", expectedLength: 3, expectedSubstring: "wke" },
    { input: "", expectedLength: 0, expectedSubstring: "" },
    { input: " ", expectedLength: 1, expectedSubstring: " " },
    { input: "dvdf", expectedLength: 3, expectedSubstring: "vdf" }
];

let passed = 0;
let failed = 0;

tests.forEach((test, index) => {
    const lengthResult = lengthOfLongestSubstring(test.input);
    const substringResult = findLongestSubstring(test.input);
    
    const lengthOk = lengthResult === test.expectedLength;
    const substringOk = substringResult === test.expectedSubstring;
    
    if (lengthOk && substringOk) {
        console.log(`✓ Test ${index + 1} PASSED: "${test.input}" -> Length: ${lengthResult}, Substring: "${substringResult}"`);
        passed++;
    } else {
        console.log(`✗ Test ${index + 1} FAILED: "${test.input}"`);
        console.log(`  Expected: Length=${test.expectedLength}, Substring="${test.expectedSubstring}"`);
        console.log(`  Got: Length=${lengthResult}, Substring="${substringResult}"`);
        failed++;
    }
});

console.log(`\nResults: ${passed} passed, ${failed} failed`);