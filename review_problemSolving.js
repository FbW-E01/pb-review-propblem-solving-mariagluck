
// 1. Make a function that works like this:

//time estimate: 5 minutes code, but it took more like 20 because of the array print not object

function examine(...args ) {
    const argsTypeArray = args.map(el => Array.isArray(el) ? `"array"`  : `"${typeof el}"`); 
    
    console.log(`[${argsTypeArray.join(", ")}]`);
}


 examine({})         // ["object"]
 examine("hi")       // ["string"]
 examine(3, 1)       // ["number", "number"]
 examine(3, "hi")    // ["number", "string"]
 examine([], ()=>{}) // ["array", "function"]


// 2. Explain each line of code here (answer as a series of comments)

        // function getSome(...arguments) {
        //     const args = arguments.slice(1, 3);
        //     return args;
        // }
        // console.log(getSome(90, 100, 75, 40, 89, 95));

//time estimate: 5 minute code starts 13:09 -end 13:14

//function getSome() takes several arguments, 
//inside the scope the function saves a variable called args with the arguments .slice(1, 3), which means it saves a shallow copy of the arguments passed containing the portion indicated (elements from index 1-included until index 3-excluded) as an array. 
//next line returns the variable args. 
//Outside the function, we call it by console.log(name of the function(arguments we want to pass)) --> console.log(getSome(90, 100, 75, 40, 89, 95));

// 3. "Client order"

// Your client SpaceY is creating a new AI system that tries to detect patterns in data using their new algorithm. You need to create a function or functions that can be used to generate data that looks like this: 

// Your function will need to generate data based on three different inputs:

//     - idLength:number - how long should the "id" field be; how many numbers. IDs do not need to be unique.
//     - startDate:string - the first date when your data should be created (from 00:00:00)
//     - endDate:string - the last date when your data should be created (to 23:59:59)


function datesGenerator(idLength, start, end) {
    const id = idLength * (Math.floor(Math.random() * 100000000));
    const idString = String(id).padStart(9, "0");

    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    const formatedDate = randomDate.toLocaleString('DE', { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit', 
        hour: '2-digit', 
        minute: '2-digit',
        second:'2-digit' });
   
    return { id: idString, time: formatedDate + " UTC" };
    
}

console.log(datesGenerator(5, new Date(2012, 0, 1), new Date())); // e.g. { id: 275614680, time: '06.12.2016, 11:53:55 UTC' }

// this is an example to test and prints an array of dates with 10 date objects
const arrayOf10Dates = [];
for (let i = 0; i < 10; i++) {
    arrayOf10Dates.push(datesGenerator(5, new Date(2012, 0, 1), new Date()));
    
}
console.log(arrayOf10Dates);
// [
//   { id: 322097735, time: '13.05.2014, 03:13:48 UTC' },
//   { id: 4341295, time: '07.02.2014, 01:59:27 UTC' },
//   { id: 226233855, time: '23.07.2014, 22:16:34 UTC' },
//   { id: 65247060, time: '02.01.2018, 00:53:23 UTC' },
//   { id: 10232595, time: '29.08.2018, 18:37:56 UTC' },
//   { id: 90725220, time: '21.12.2014, 21:36:42 UTC' },
//   { id: 295320265, time: '04.04.2017, 11:52:05 UTC' },
//   { id: 164190785, time: '10.04.2014, 16:53:43 UTC' },
//   { id: 349175560, time: '16.05.2021, 09:14:06 UTC' },
//   { id: 361593005, time: '10.12.2013, 06:53:12 UTC' }
// ]



// Also, add a comment where you report how long does it take to generate 10 million lines of data.

console.time("test");
const arrayOfDates = [];
for (let i = 0; i < 10000000; i++) {
    arrayOfDates.push(datesGenerator(5, new Date(2012, 0, 1), new Date()));
    
}
console.log(arrayOfDates);
console.timeEnd("test"); // test: 17:29.247 (m:ss.mmm)
