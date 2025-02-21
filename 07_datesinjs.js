// Dates
// JavaScript stores dates as number of milliseconds since January 01, 1970
const myDate = new Date();
console.log(myDate) //Output : 2024-11-27T05:25:25.330Z
// We can use various methods to convert this date into more readable value.
console.log(myDate.toString()) //Output : Wed Nov 27 2024 10:55:25 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()) // Output : 11/27/2024, 10:55:25 AM
console.log(myDate.toLocaleDateString()) //Output : 11/27/2024
console.log(myDate.toLocaleTimeString()) // Output : 10:55:25 AM

console.log(myDate.toDateString()) //Output : Wed Nov 27 2024
console.log(myDate.toTimeString()) // Output :10:55:25 GMT+0530 (India Standard Time)

console.log(myDate.toISOString()) // Output : 2024-11-27T05:25:25.330Z
console.log(myDate.toJSON()) //Output : 2024-11-27T05:25:25.330Z
console.log(typeof myDate); // date is object in java script


let myCreatedDate = new Date(2025,1,22) // show date and day
console.log(myCreatedDate.toDateString());// Sat Feb 22 2025
console.log(myCreatedDate.toLocaleDateString())// 2/22/2025
console.log(myCreatedDate.toLocaleString())// 2/22/2025, 12:00:00 AM


let myCreatedDate1= new Date(2023,0,23,5,3) 
console.log(myCreatedDate1.toLocaleString());//1/23/2023, 5:03:00 AM
console.log(myCreatedDate1.toLocaleDateString());//1/23/2023

let myCreatedDate2 = new Date("2023-01-14")
let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate2.toLocaleString());//1/14/2023, 5:30:00 AM
console.log(myCreatedDate3.toLocaleString());//1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})