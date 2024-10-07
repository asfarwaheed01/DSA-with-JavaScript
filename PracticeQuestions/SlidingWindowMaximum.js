// You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.
// Return the max sliding window.
// Input: nums = [1,3,-1,-3,5,3,6,7], k=3
// Output: [3,3,5,5,6,7]

const maxSlidingArrayNaive = function(nums,k){
    const result = [];
    const n = nums.length;
    for(i=0;i<=n-k;i++){
        let max = nums[i];
        for(j=1;j<k;j++){
            if(nums[i+j]>max){
                max = nums[j+i]
            }
        }
        result.push(max);
    }
    return result;
}

const maxSlidingWindowQueue = function(nums,k){
    const result = []
    const dequeue = []
    for (let i=0;i<nums.length;i++){
        if(dequeue.length>0 && dequeue[0] <=i-k){
            dequeue.shift()
        }
        while(dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]){
            dequeue.pop()
        }

        dequeue.push(i)
        if(i>=k-1){
            result.push(nums[dequeue[0]])
        }
    }
    return result;
}

console.log(maxSlidingWindowQueue([1,3,-1,-3,5,3,6,7],3))