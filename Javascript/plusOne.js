/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // first join the digits with no space and add 1  
    let str = digits.join("");
    let num = BigInt(str)+ BigInt(1);
    // convert the num into array

    // turns num to a string first
    // then splits them at each character and stuffs it into an array, hence the ('') default single quote value with no space
    // note: split can only be used on strings!
    // then maps over each element assigning a NEW array over itself but converting each STRING integer into an INT integer.
    num = num.toString().split('').map((num) => parseInt(num));
    return num;

};

console.log(plusOne([1,2,3]))
 
 
 