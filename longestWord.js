

function LongestWord(sen) { 
//1st check input
    if (!sen || sen.length < 2 || typeof sen !== 'string'){
        return "Input is not right"
    }
    //replace checks for regex argument and gets rid of all nums and symbols
    //split takes the string and converts it into an array in words
    //longestWord sets the initial word length to compare others to
        sen = sen.replace(/[^a-zA-Z0-9 ]/, " ")
        const words = sen.split(" ")
        const longestWord = words[0]

        for(i = 0; i < words.length; i++ ) {
            if (words[i].length > longestWord.length){
                longestWord = words[i]
            }
        }
    return longestWord; 
  
  }
     
  // keep this function call here 
  console.log(LongestWord(readline()));