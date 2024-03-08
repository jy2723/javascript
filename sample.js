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




// map method
nums = [1,5,6,8,7]
let calsquare = (num => {
    console.log(num * num);
    
});
let new_arr = nums.map((val) =>{
    return val * val;
});
console.log(new_arr)

// filter method
nums = [1,5,6,8,7]
let even_arr = nums.filter((val) =>{
    return val %2 ==0 ;
});
console.log(even_arr)
let n =prompt("enter number of elements:")

arr=[];
for(let i=1;i<=n;i++){
    arr[i-1] = i
}
console.log(arr)
// reduce method
let sum = arr.reduce((prev, curr) => {
    return prev+curr
}
)
console.log(sum)

