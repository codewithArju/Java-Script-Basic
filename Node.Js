//////here i print an array each element
let arr =[ 10,32,45,65,76 ];
arr.forEach((ele)=> console.log(ele));
 /////////here Add 10 to all the elements of an array using map Method
let arr1 = arr.map(ele=>ele + 10);
 console.log (arr1); 
 ///////// here Filter out allthe students's marks who has got less than 50 in the exam
 let arr3 = [10,20,44,55,66,77,88,43,45,67,32,];
 let filteredArr = arr3.filter((ele)=>ele >50);
 console.log(filteredArr);
 /////////here i Find out the average number of that class using reduce Method
let arr4 = [10,20,44,55,66,77,88,];
let Total = arr4.reduce((acc, current) => acc + current, 0);
let average = Total / arr4.length;
console.log(average);