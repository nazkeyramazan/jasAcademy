function Fibonacci({inputData}){
    function fib(n) {
        return n <= 1 ? n : fib(n - 1) + fib(n - 2);
      }
    return <h1>
        Fibonacci: {fib(inputData)}
    </h1>
}

export default Fibonacci;