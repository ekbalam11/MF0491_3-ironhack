async function getPuzzle(wordCount) {
    const response = await fetch ("https://puzzle.mead.io/puzzle?wordCount=3");
    let data = await response.json();
    console.dir(data);
    let hiddenSentence = data.puzzle;
    return hiddenSentence;
}