const sumAll = function(...nums) {
    for (num of nums){
        if (typeof num !== 'number'|| num < 0 || num % 1 !== 0){
            return 'ERROR';
        }
    }
    let result = 0;
    let [start, end] = nums;
    if (start > end ){
       let tmp = start;
       start = end;
       end = tmp;
    }
    for (let i = start; i <= end; i++)
        {
            result += i; 
        } 
        return result;
};

// Do not edit below this line
module.exports = sumAll;
