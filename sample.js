// const student = {
//     fullname : "yash",
//     age : 20,
//     cgpa : 9.2

// };
// console.log(student.age)

// arr = [200, 300, 600 , 5000]
// for( let i=0;i<arr.length;i++){
//     offer = arr[i]*(1/10);
//     arr[i] = arr[i] - offer;
//     console.log(arr[i]);
// }



// call back
nums = [1,5,6,8,7]
let calsquare = (num => {
    console.log(num * num);
    
});
nums.forEach(calsquare)
