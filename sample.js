
function vowels(str){
    let count = 0
    for(let i=0;i<str.length;i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count += 1;
        }   
    }
    return count
}
// arrow function
const count_vowels = (str) => {
    let count = 0
    for(let i=0;i<str.length;i++){
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        count += 1;
        }   
    }
    return count
    
}