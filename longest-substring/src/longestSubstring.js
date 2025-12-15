function lengthOfLongestSubstring(s) {
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map();
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1;
        }
        
        charIndexMap.set(currentChar, end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
}

function findLongestSubstring(s) {
    if (s.length === 0) return "";
    if (s.length === 1) return s;
    
    let maxLength = 0;
    let start = 0;
    let resultStart = 0;
    const charIndexMap = new Map();
    
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];
        
        if (charIndexMap.has(currentChar) && charIndexMap.get(currentChar) >= start) {
            start = charIndexMap.get(currentChar) + 1;
        }
        
        charIndexMap.set(currentChar, end);
        
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            resultStart = start;
        }
    }
    
    return s.substring(resultStart, resultStart + maxLength);
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { lengthOfLongestSubstring, findLongestSubstring };
}