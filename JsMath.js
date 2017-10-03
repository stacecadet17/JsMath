//function that removes negative numbers from an array
function zero_negativity(arr){
  var newarr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < 0){
      continue;
    }else{
      newarr.push(arr[i]);
    }
  }
  return newarr;
}

zero_negativity([-1, 2, 6, -17, 9, 11])

//function that determines whether a given number is even
function isEven(num){
  if(num % 2 === 0){
    return "Number is Even";
  }else{
    return "Number is not Even";
  }
}

isEven(6);


//function that returns the number of even elements in an array
function How_many_even(arr){
var newarr = [];
var count = 0;
for(var i = 0; i < arr.length; i++){
  if(arr[i] % 2 === 0){
    newarr.push(arr[i]);
    count++;
  }
}
return count;
}

How_many_even([1, 2, 3, 4, 5, 6, 7, 8]);

//function that creates an array with randomly generated elements with the length of the given number
function create_dummy_array(num){
  const arr = [];
  for(let i  = 0; i < num; i++){
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
}

//function takes an array and returns a random element based on the length of the array
function randomChoice(arr){
  let index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
