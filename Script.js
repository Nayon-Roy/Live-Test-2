     // 1. Write a function reverseString(str) that takes a string and returns it reversed. Ex: reverseString("hello"); // Output: "olleh"
        const reverseString = (str) => {
            return str.split("").reverse().join("");
        };
    console.log(reverseString("hello"));

        //  2. Write a function sumArray(arr) that takes an array of numbers and returns the sum of all the numbers. Ex: sumArray([1, 2, 3, 4]); // Output: 10
        const sumArray = (arr) => {
            return arr.reduce((total, value) => total + value);
        };
    console.log(sumArray([1, 2, 3, 4]));

        // 3. Write a function removeDuplicates(arr) that takes an array and returns a new array with only unique values (duplicates removed). Ex: removeDuplicates([5, 5, 5, 6, 7]); // Output: [5, 6, 7]
        const removeDuplicates = (arr) => {
            return arr.filter(function (value, index, array) {
                return array.indexOf(value) === index;
            });
        };
    console.log(removeDuplicates([5, 5, 5, 6, 7]));

        // 4.  Write a function celsiusToFahrenheit(celsius) that takes a temperature in Celsius and converts it to Fahrenheit. The formula to convert Celsius to Fahrenheit is:
        const celsiusToFahrenheit = (celsius) => {
            return (celsius * 9) / 5 + 32;
        };
    console.log(celsiusToFahrenheit(25));
