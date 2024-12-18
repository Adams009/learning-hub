// function findLargest(a, b, c) {
//     // const arg = Array.from(arguments)
//     const arg = [a, b, c]

//     let index = 0
//     let length = arg.length
//     let largest = arg[index]

//     for(index; index < length; index++) {
//         largest = largest < arg[index] ? arg[index] : largest
//     }

//     console.log(largest);
    
// }

findLargest(0, 10, 2)

function findLargest(a, b, c) {
    let largest = Math.max(a, b, c);
    console.log(largest);
    
}
