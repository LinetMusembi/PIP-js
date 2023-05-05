// Write a function that takes an array of numbers as input and returns the sum of all the numbers
function addNums(arr){
    sum = 0
    for(let i=0;i<arr.length;i++){
        sum +=arr[i] 
    }
    return sum
}
console.log(addNums([1,2,3,4,5]))

// Write a function that takes two numbers as input and returns true if their sum is greater than 100,
// And false otherwise
function checkGreatNum(a,b){
    result = a+b
    if(result >100){
        return true
    }
    else{
        return false
    }   
}
console.log(checkGreatNum(4,5));


// Write a function that takes a string as input and returns the number of vowels in the string

function checkVowels(str){
    count = 0
    vowels = "a","e","i","o","u"
    if(vowels == str){
        count+=1
    }
    return count
}
console.log(checkVowels(str="mountain"));


// Write a function that takes in a array of numbers as a parameter and returns the second largest number 
// in the array

function checkSecondLargest(b){
    result= b.sort
    return b[-2]
}
console.log(checkSecondLargest(2,8,9,5,6))

// Write a function that takes a string as a parameter and returns true if the string is a palindrome
//  and false otherwise.
function isPalindrome(str){
    var  myStr="lynet".split(",").reverse("").join("")
     if(str==myStr){
         return "true"
     }else
     return "false"
 }
 console.log(isPalindrome("lynet"))
 
 
 
 
 
 
 
 






 