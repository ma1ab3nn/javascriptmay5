/* Task 1

Write a function that outputs a sentence. Then invoke that function later in your code. */

function outputSentence () {
    console.log("Running the outputSentence() function");
    document.write("Running the outputSentence() function")
 
}
outputSentence();

/*Task 2

Write a simple program to combine a first name and a last name inside a function. Then update the function to accept a first and last name as arguments. */

function combineNames (firstName, lastName) {
    console.log(`Running combineNames ${firstName} ${lastName} `);
    document.write("<br>");
    document.write (`${firstName} ${lastName}`);
}
combineNames("Joe", "Bloggs");


/* Task 3

Add a return statement to your 'name' function. Use that function to set the value of a variable.*/

function combineNamesAndReturnFullname (firstNameA, lastNameA) {

    let fullName = firstNameA + " " + lastNameA;
    console.log(`Running combineNamesAndReturnFullname ${fullName}`);
    document.write("<br>");
    document.write(`${fullName}`);

    return (fullName);

}
combineNamesAndReturnFullname("Mala", "Benn");


/* Task 4

a) Make a variable called "temperature". Write some code that tells you to put on a coat if it is below 50 degrees */


function shallIwearACoat (temperature) {

    if (temperature <50) {
        console.log(`Temperature is less than 50 deg`);
        document.write("<br>");
        document.write(`The temperature is ${temperature} degrees, which is less than 50 degress, so you need to put a coat on`); 
    }

}

shallIwearACoat(30);

/* b) Extend the Program to show the following:
If it's less than 50 degrees, wear a coat.
If it's less than 30 degrees, wear a coat and a hat.
If it's less than 0 degrees, stay inside.
Otherwise, just pants and vest is fine. 


c) Add a logical operator to your ‘Shall I wear a coat?’ program

*/


function temperature (theTemperature, ownHat, ownCoat) {
    if (theTemperature <= 0) {
        return(console.log("Stay inside"), document.write("<br>Stay inside"));
    }
    
    else if ( theTemperature < 30 && ownHat == true && ownCoat== true ) {
        return(console.log("Put your coat and hat on"), document.write("<br>Put your coat and hat on"));
    }

    else if ( theTemperature < 50 && ownCoat == true) {
        return(console.log("Put your coat on"), document.write("<br>Put your coat on"));
    }
    
    else {
        return(console.log("Pants and vest is fine"), document.write("<br>Pants and vest is fine"));
    };

}

temperature (49, true, true);
