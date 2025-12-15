document.addEventListener('DOMContentLoaded', function() {
    const inputString = document.getElementById('inputString');
    const calculateBtn = document.getElementById('calculateBtn');
    const lengthResult = document.getElementById('lengthResult');
    const substringResult = document.getElementById('substringResult');
    const exampleButtons = document.querySelectorAll('.examples button');

    // Initialize
    calculateLongestSubstring();

    // Event listeners
    calculateBtn.addEventListener('click', calculateLongestSubstring);
    
    inputString.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            calculateLongestSubstring();
        }
    });

    // Example buttons
    exampleButtons.forEach(button => {
        button.addEventListener('click', function() {
            inputString.value = this.getAttribute('data-string');
            calculateLongestSubstring();
        });
    });

    function calculateLongestSubstring() {
        const s = inputString.value;
        const length = lengthOfLongestSubstring(s);
        const substring = findLongestSubstring(s);
        
        lengthResult.textContent = length;
        substringResult.textContent = substring || '(empty string)';
    }
});