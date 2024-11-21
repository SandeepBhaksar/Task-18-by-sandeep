// case 01
// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(num => num ** 2);

// console.log(numbers, squaredNumbers);


// case 02
// function getGrade(score) {
//     return score >= 90 ? 'A' :
//            score >= 80 ? 'B' :
//            score >= 70 ? 'C' :
//            score >= 60 ? 'D' :
//                          'F';
// }
// console.log("grade" + getGrade(95));
// console.log("grade" + getGrade(85));
// console.log("grade" + getGrade(75));
// console.log("grade" + getGrade(65));
// console.log("grade" + getGrade(55));


// case 03
// const car = {
//     companyName: "Toyota",
//     model: "Innova Hycross",
//     year: "2022",
// }

// function newYear(carObject, newYear) {
//     carObject.year = newYear;
// }

// newYear(car, 2024);

// const {model, year} = car;

// console.log(`Car Model: ${model}`);
// console.log(`Car Year: ${year}`);


// case 04
    // const numbers = [1, 5, 7, 9, 45, 17, 1554, 44, 656, 4594];
    // const isPrimeNum = num => {
    //     if (num < 1 )return false;
    //     for (i=2; i<= Math.sqrt(num); i++) {
    //         if (num % i ==0) return false;
    //     }
    //     return true;
    // }

    // const primeNumber = numbers.filter(isPrimeNum);
    // console.log(primeNumber);
    


// case 05
    // The map, filter, and reduce functions are powerful array methods in JavaScript, each serving distinct purposes. Here's a detailed breakdown of their use cases:
    // Map = Map is used to transform each element of an array and create new array of same length.
    // Filter = Filter is used to filter elements from an array based on a condition, returning a new array with only the elements that satisfy the condition.
    // Reduce = Reduce is used to aggregate or accumulate values in an array into a single output (number, object, string, etc.).


// case 06
    // Define an async function to fetch data from the API
    // async function fetchData() {
    //     const apiUrl = "https://jsonplaceholder.typicode.com/posts"; 

    //     try {
    //         const response = await fetch(apiUrl); 
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         const data = await response.json(); 
    //         console.log(data); 
    //     } catch (error) {
    //         console.error("Error fetching data:", error); 
    //     }
    // }
    // fetchData();


// Case 07
// const person = {
//     name: "John Doe",
//     address: {
//         city: "New York",
//         zip: "10001"
//     },
//     contact: {
//         phone: "123-456-7890",
//         email: "john.doe@example.com"
//     }
// };
// const phoneNumber = person.contact?.phone;
// console.log(phoneNumber ? `Phone Number: ${phoneNumber}` : "Phone number not available");
// const personWithoutContact = {
//     name: "Jane Doe",
//     address: {
//         city: "Los Angeles",
//         zip: "90001"
//     }
// };
// const phoneNumber2 = personWithoutContact.contact?.phone;
// console.log(phoneNumber2 ? `Phone Number: ${phoneNumber2}` : "Phone number not available");


