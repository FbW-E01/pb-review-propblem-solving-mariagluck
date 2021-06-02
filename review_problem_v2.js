



console.time("test");
function datesGenerator(idLength, start, end) {

    
    const arrayOfDates = [];
    for (let i = 0; i < 10000000; i++) {

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
    
    arrayOfDates.push({ id: idString, time: formatedDate + " UTC" });
    
     }
    return arrayOfDates;
}

console.log(datesGenerator(5, new Date(2012, 0, 1), new Date()))
console.timeEnd("test");