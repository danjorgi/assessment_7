// 1) Sum Zero
function addToZero(nums) {
    const seenNumbers = new Set();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = -num;

        if (seenNumbers.has(complement)) {
            return true;
        }

        seenNumbers.add(num);
    }

    return false;
}

console.log(addToZero([]));
console.log(addToZero([1]));
console.log(addToZero([1, 2, 3]));
console.log(addToZero([1, 2, 3, -2]));


// 2) Unique Characters
function hasUniqueChars(string) {
    const charSet = new Set();

    for (let i = 0; i < string.length; i++) {
        const char = string[i];

        if (charSet.has(char)) {
        return false;
        }
        charSet.add(char);
    }

    return true;
}

console.log(hasUniqueChars("Monday"));
console.log(hasUniqueChars("Moonday"));


// 3) Pangram Sentence
function isPangram(sentence) {
    const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");

    const lowercaseSentence = sentence.toLowerCase();

    for (let i = 0; i < lowercaseSentence.length; i++) {
        const char = lowercaseSentence[i];

        if (alphabetSet.has(char)) {
            alphabetSet.delete(char);

            if (alphabetSet.size === 0) {
                return true;
            }
        }
    }

    return false;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));

// 4) Longest Word
function findLongestWord(words) {
    if (words.length === 0) {
        return 0;
    }

    let longestLength = 0;

    for (let i = 0; i < words.length; i++) {
        const currentWord = words[i];
        const currentLength = currentWord.length;

        if (currentLength > longestLength) {
            longestLength = currentLength;
        }
    }

    return longestLength;
}

console.log(findLongestWord(["hi", "hello"]));