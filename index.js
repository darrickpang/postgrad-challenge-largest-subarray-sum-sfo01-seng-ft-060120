let array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4]
 
function largestSubarraySum(array){
    // code to write here
    var sum = 0
    var max = 0 

    for(var x = 0; x < array.length; x++){
        sum = Math.max((array[x] + sum), 0)
        max = Math.max(sum, max)
    }
    return max
}
 
largestSubarraySum(array)