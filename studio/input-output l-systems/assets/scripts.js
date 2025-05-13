//get the entries
var request = await fetch('assets/entries.json');
var entries = await request.json();

console.log(entries);

//get the input elements
var nameSelect = document.querySelector('select[name="name"]');
var degreeSelect = document.querySelector('select[name="degree"]');
var iterationSelect = document.querySelector('select[name="iteration"]');

console.log(nameSelect, degreeSelect, iterationSelect);

//get the submit button
var submitButton = document.querySelector('button[name="submit"]');

console.log(submitButton);

//get the output element
var output = document.querySelector('.output');

console.log(output);

//add event listener to the button 
submitButton.addEventListener('click',()=>{

    //get the active settings
    var name = nameSelect.value;
    var degree = degreeSelect.value;
    var iteration = iterationSelect.value;

    console.log(name, degree, iteration);
    console.log("test");

//get the matching entry
var matchingEntry = entries.find((entry) => {
        return entry.name == name
            && entry.degree == degree
            && entry.iteration == iteration;
    });

    console.log(matchingEntry);

    if (matchingEntry) {
        output.innerHTML = `<img class="image" src="lsystems-copy/${matchingEntry.filename}">`;
    } else {
        output.innerHTML = `<div class="message"> Nothing found :( </div>`;
    }

});





