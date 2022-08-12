// Given an array of strings, return another array containing all of its longest strings.

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function longestString(inputArray){
    longestWord=''
    for(var str of inputArray){
        if(str.length > longestWord.length)
        longestWord = str
    }return longestWord

}
console.log(longestString(['aaa', 'bbbbb', 'ccccc', 'ddddd', 'ee', 'lllll']))