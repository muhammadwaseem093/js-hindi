// for loop
let myArray = ['waseem','irshad','akmal','murshid','mumtaz','mohsin','mubeen']

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element)
    
// }
// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
//     for (let j = 1; j< 10; j++){
//         //   console.log(`Inner loop value ${j} and inner loop ${i}`);  
//             console.log(i + '*' + j +'=' + i*j)
//     }
    
// }

// console.log(myArray.length);
// for (let index = 0; index < myArray.length; index++) {
    
//     const element = myArray[index];
//     console.log(element)
    
// }

// break
// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log(`Detected Five`)
//         break
//     }
//     console.log(`Value of index is ${index}`);

    
// }
// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5 || index == 12){
        console.log(`Detected Five`)
        continue
    }
    console.log(`Value of index is ${index}`);

    
}