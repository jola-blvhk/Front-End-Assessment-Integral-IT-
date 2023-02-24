  var numbers = [12, 5, 15, 11, 14, 13, 16];

  function findMinimum(arr) {
    let minimum = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
}
 

console.log(findMinimum(numbers))
 
