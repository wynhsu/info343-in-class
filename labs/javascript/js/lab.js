// Put your JavaScript lab code here!
let x = 'I like JavaScript more than I like to party';
x = x.slice(28, 43);
console.log(x);
let y = 'I love Washington State University';
y = y.replace('Washington State University', 'The University of Washington');
console.log(y);
let z = x.concat(' ', y);
console.log(z);

function sumUpTo(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumUpTo(5));

function vowelCount(word) {
    let vowels = 0;
    for (let i = 0; i < word.length; i++) {
        curr = word.charAt(i);
        if (curr == 'a' || curr == 'e' || curr == 'i' || curr == 'o' || curr == 'u') {
            vowels++;
        }
    }
    return vowels;
}
console.log(vowelCount('kookaburra'));
console.log(vowelCount('sky'));

function findMin(nums) {
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // if (min > nums[i]) {
        //     min = nums[i];
        // }
        min = nums[i] < min ? nums[i] : min;
    }
    return min;
}
console.log('The smallest number in this array is: ' + findMin([-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8]));

function longestWord(list) {
    let longest = '';
    for (let i = 0; i < list.length; i++) {
        if (longest.length <= list[i].length) {
            longest = list[i];
        }
    }
    return longest;
}
console.log('The longest word in this array is: ' + longestWord(["Java", "PHP", "JavaScript", "SML", "C", "Python", "Ruby"]));

function removeAll(list, single) {
    let noCaseSingle = single.toLocaleLowerCase();
    let newArray = [];
    for (let i = 0; i < list.length; i++) {
        let noCaseWord = list[i].toLocaleLowerCase();
        if (noCaseSingle !== noCaseWord) {
            newArray.push(list[i]);
        }
    }
    return newArray;
}
console.log(removeAll(["foo", "bar", "baz", "Foo", "FOO"], 'foo'));

let books = [
    {
        title: 'Harry Potter and the Goblet of Fire',
        author: 'J.K. Rowling',
        read: true
    },
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        read: true
    },
    {
        title: 'The Hunger Games',
        author: 'Suzanne Collins',
        read: true
    }
]

books.push({
    title: '1984',
    author: 'George Orwell',
    read: false
})
console.log(books);

function readBooks() {
    for (let i = 0; i < books.length; i++) {
        if (books[i].read) {
            console.log('I have read ' + books[i].title + ' by ' + books[i].author + '. ');
        } else {
            console.log('I really want to read ' + books[i].title + ' by ' + books[i].author + '. ');
        }
    }
}
readBooks();