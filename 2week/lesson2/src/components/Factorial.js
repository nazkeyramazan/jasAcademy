function Factorial({inputData}){
    function factorial(n){
        //base case
        if(n === 0 || n === 1){
            return 1;
        //recursive case
        }else{
            return n * factorial(n-1);
        }
    }
    return <h1>
        Factorial:{factorial(inputData)}
    </h1>
}

export default Factorial;