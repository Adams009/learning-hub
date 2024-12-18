// function countVowel(word) {
//     let count = 0;
//     let index = 0;
//     for (index; index < word.length; index++) {
//         switch (true) {
//             case word[index] === 'a' || word[index] === 'A':
//             case word[index] === 'e' || word[index] === 'E':
//             case word[index] === 'i' || word[index] === 'I':
//             case word[index] === 'o' || word[index] === 'O':
//             case word[index] === 'u' || word[index] === 'U':
//                 count++;
//                 break;
//             default:
//                 break;
//         }
//     }

//     console.log(count);
    
// }

countVowel("Aabbbbxor");

function countVowel(word) {
    let count = 0;
    let index = 0;
    for (index; index < word.length; index++) {
        let char = word[index].toLowerCase();
        if (char === 'a' 
            || char === 'e' 
            || char === 'i'
            || char === 'o'
            || char === 'u ') {
                count += 1;
            }
    }

    console.log(count);
    
}