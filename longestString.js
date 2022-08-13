// Given an array of strings, return another array containing all of its longest strings.

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function longestString(inputArray){
    var newArray=[]
    
    if(inputArray.length == 1){
        return inputArray
    }
    var longestWord = inputArray.sort(function(a,b) {
        return b.length - a.length
       // console.log(longestWord)
    })
    var longestWordLength= longestWord[0].length

    for( let i = 0; i < longestWord.length; i++){
        if(longestWord[i].length== longestWordLength){
            newArray.push(longestWord[i])
        }
     
    }return newArray

}
console.log(longestString(['aaa', 'bbbbb', 'ccccc', 'ddddd', 'ee', 'lllll']))