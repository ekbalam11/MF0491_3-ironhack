async function getPuzzle(wordCount) {
    const response = await fetch (`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    let data = await response.json();
    console.dir(data);
    let hiddenSentence = data.puzzle;
    return hiddenSentence;
}