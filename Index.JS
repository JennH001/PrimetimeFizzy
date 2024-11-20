for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }  else if(i % 3 === 0) {
        console.log("Fizz");
    } else if(i % 5 === 0) {
        console.log("Buzz");
} else {
console.log(i);
}
}

//primetime


function Prime(num) {
    if (num <= 1) return false; 
    for (let i = 2; i < num; i++) 
        { 
        if (num % i === 0) 
            {
            return false; 
        }
    }
    return true; 
}


let n = 20; 


let Next = n + 1; 

while (true) {
    if (Prime(Next)) {
        console.log(Next); 
        break; 
    }
    Next++; 
    console.log(Next); 
}
