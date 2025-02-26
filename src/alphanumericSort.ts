function alphanumericSort(input : string) {
//npx ts-node src/alphanumericSort.ts

    //create consts for regular expressions
    const numbers = input.match(/\d+/g) || [];
    const lowercaseLetters = input.match(/[a-z]/g) || [];
    const uppercaseLetters = input.match(/[A-Z]/g) || [];
    const others = input.match(/[^a-zA-Z0-9]/g) || [];

    //sort numbers as whole numbers, upper & lower case letters and other chars
    const sortedNumbers = numbers.sort((a, b) => parseInt(a) - parseInt(b)).join(''); 
    const sortedLowercase = lowercaseLetters.sort().join('');
    const sortedUppercase = uppercaseLetters.sort().join('');
    const sortedOthers = others.join('');

    return sortedNumbers + sortedLowercase + sortedUppercase + sortedOthers;
}

console.log(alphanumericSort('A11a4')); // Should output '411aA'
console.log(alphanumericSort('3029aBb')); // Should output '0239aBb'
console.log(alphanumericSort('')); // Should output ''
console.log(alphanumericSort('123')); // Should output '123'
console.log(alphanumericSort('abcABC')); // Should output 'aAbBcC'
console.log(alphanumericSort('123abcABC!!!')); // Should output '123aAbBcC!!!'
console.log(alphanumericSort('👍👍123ab')); // Should output '123ab👍👍' (handling Unicode characters)
console.log(alphanumericSort('A11a4C1b2')); // Should output '12411aAbC' (testing multiple numbers and mixed case)
console.log(alphanumericSort('1a2A3b4B5c6C')); // Should output '123456aAbBcC' (interspersed numbers and letters)
console.log(alphanumericSort('1234567890')); // Should output '0123456789' (sequential numbers)
console.log(alphanumericSort('9A8B7C6D5E4F3G2H1I')); // Should output '123456789ABCDEFGHI' (cyrillic symbols)
console.log(alphanumericSort('9A8B7C6ФФD5E4влуф22у')); // Should output 45678922ABCDEФФвлуфу