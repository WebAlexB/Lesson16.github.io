const formStatistics = document.getElementById("form-statistics");
const inputText = document.getElementById("text-statistics");

formStatistics.addEventListener('submit', function (e) {
    e.preventDefault();
    const words = inputText.value;
    calculateStatistics(words.split(/\s+/));
});


function calculateStatistics(words) {
    const uniqueWords = new Set(words);
    const wordCountMap = new Map();
    words.forEach(function (word) {
        if (wordCountMap.has(word)) {
            wordCountMap.set(word, wordCountMap.get(word) + 1);
        } else {
            wordCountMap.set(word, 1);
        }
    });

    displayStatistics(uniqueWords.size, wordCountMap);
}

function displayStatistics(uniqueWordsCount, wordCountMap) {
    const resultContainer = document.getElementById("statistics-result");
    resultContainer.innerHTML = "Унікальних слів: " + uniqueWordsCount + "<br>";

    wordCountMap.forEach(function (count, word) {
        resultContainer.innerHTML += word + ": " + count + "<br>";
    });
}