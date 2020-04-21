console.log('ex.1------------------');
// 1.display in the console the numbers from 1 to 20

for ( i = 1; i <= 20; i++) {
    console.log(i);
};

console.log('ex.2------------------');
// 2.display in the console the odd numbers from 1 to 20

for (i = 1 ; i <= 20; i = i + 2) {
    console.log(i);
};

console.log('ex.3------------------');
// 3.compute the sum of the elements of an array and display it in the console

var nums = [5, 12, 52, 37, 10, -5, 3, 21];
function sumOfNumbers(list) {
    var i = 0;
    var sum = 0;
    while (i < list.length) {
      sum = sum + list[i];
      i++;
    }
    return sum;
  }
  console.log(sumOfNumbers(nums));

  console.log('ex.4------------------');
// 4.compute the maximum of the elements of an array and display it in the console

var a = Math.max(1, 6, 9, 9, 12, 67, 8, 23, 45);
console.log(a);

console.log('ex.5.1------------------');
// 5.compute how many times a certain element appears in an array

var numbers = [7, 9, 3, 5, 1, 3, 6, 5, 5, 7, 5, 9];
var element = 5;

var count = function count(element) {
  var c = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === element) {
      c = c + 1;
    }
  }
  return c;
};
console.log(count(element));


console.log('ex.5.2------------------');
var arr = [7, 9, 3, 5, 1, 3, 6, 5, 5, 7, 5, 9];
var new_arr = {};
for (i = 0; i < arr.length; i++) {
  if (new_arr[arr[i]]) {
    new_arr[arr[i]]++;
  } else {
    new_arr[arr[i]] = 1;
  }
}
console.log(new_arr);

// 6. Matrix

var matrix = [                                     
  [0, 1, 0, 1],                                      
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [1, 0, 1, 0]
];
 
for (var i = 0; i < matrix.length; i++) {               
  for (var j = 0; j < matrix[i].length; j++){
      document.write(matrix[i][j]);
  }
  document.write("</br>");                          
} 
