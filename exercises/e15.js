
// EXERCISE 15
// Please, read the exercise-info/concat.md to get the initial data of what is the expected result of this exercise.
// concatArrays(['d', 'r', 'a'], ['f', 'y']) => ['d', 'r', 'a', 'f', 'y']
// NOTE: You can NOT use the array.concat() method in your code

export function concatArrays(arr1, arr2) {
  // Your code goes here...
  let result = []
  let loopNum = arr1.length + arr2.length
    for(let i=0; i<loopNum;i++){
        if(i >= arr1.length){
            result.push(arr2[i - arr1.length])
        }else{
            result.push(arr1[i])
        }
    }
    return result
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
