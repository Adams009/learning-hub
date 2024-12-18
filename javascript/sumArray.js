// function sumArray(arr) {
//     let index = 0
//     let length = arr.length
//     let sum = 0

//     for (;index < length; index++) {
//         sum += arr[index]
//     }

//     console.log(sum);
    
// }

sumArray([9, 100, 3])

function sumArray(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0)
    console.log(sum);
    
}