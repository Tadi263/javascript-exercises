const fibonacci = function(a) {
    let fib = [0, 1]
    if (a < 0){
      return "OOPS";
    };
     for (let i = 0; i < a; i++){
       sum = fib[i] + fib[i + 1];
       fib.push(sum);
     };
      return fib[a];
};

// Do not edit below this line
module.exports = fibonacci;
