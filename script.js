// object.addEventListener("click", myScript); 


const btn = document.querySelector(".analyzeButton");

const filterElem = document.querySelector("#filterBox");
const commentElem = document.querySelector("#commentBox")
const resultElem = document.querySelector("#resultBox")


btn.addEventListener("click", analyzeComment);

function analyzeComment(){
    let filterText = filterElem.value;

    // Match split string on commas, ignoring commas inside quotes.
    //https://stackoverflow.com/questions/11456850/split-a-string-by-commas-but-ignore-commas-within-double-quotes-using-javascript#comment50200043_11457952
    let filterWords = filterText.match(/(".*?"|[^\s",][^",]+[^\s",])/g);

    let comment = commentElem.value;
    let match = false;
    let filteredWords = [];
    for (var word of filterWords){
        if(comment.includes(word)){
            comment = comment.replace(word, '█'.repeat(word.length))
            match = true;
            filteredWords.push(word);
        }
    }
    if (match){
        resultElem.value = "Filtered words were:\n" + filteredWords +
        + "\n\n\n" + comment;
    } else {
        resultElem.value = 'No words filtered';
    }
}