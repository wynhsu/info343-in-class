// Put your JavaScript lab code here!
let x = 'I like JavaScript more than I like to party';
x = x.slice(27, 42);
let y = 'I love Washington State University';
y = y.replace('Washington State University', 'The University of Washington');
let z = x.concat(y);

sumUpTo (n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}