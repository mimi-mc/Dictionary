let wordList = []

function addToWordList() {
    wordList.push(document.getElementById("addInput").value);
    console.log(wordList);
    document.getElementById("addInput").value = "";
}

function SearchWord() {
    let word = document.getElementById("searchInput").value;
    let isFound = wordList.includes(word);
    if (isFound) {
        document.getElementById('outputMessage').innerText = `The word "${word}" was found.`;
    } else {
        document.getElementById('outputMessage').innerText = `The word "${word}" was not found!`;
    }
    document.getElementById("searchInput").value = "";
}
