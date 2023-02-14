// Data Structures Exercise

/*
    1a. Create a const variable named jedi and set the value of the variable to an empty array
    1b. Using index add "Luke" to the jedi array (Should be the first and only item in the array)
    1c. Using the Push method add "Obi-Wan Kenobi" to the jedi array
    1d. Using the Unshift method add "Yoda" the jedi array
    1e. Using index on the jedi array display "Luke" (You will need a console log for this)
    1f. Using another array method remove "Obi-Wan Kenobi" from the end of the jedi array
    1g. Finally, using another method remove "Yoda" from the beginning of the jedi array and display the final value of 
        the array (HINT: It should just be "Luke". Also, you will need a console log for this.)
    2a. Create a const variable named sithLords and set the value of the variable to the following array items "Darth 
        Vader", "Darth Sidious", and "Darth Maul"
    2b. Create another const variable named imperialOfficers and set the value of the variable to the following array 
        items "Grand Moff Tarkin" and "Orson Krennic".
    2c. Using the concat method join the two arrays into one and set the value to a new const variable called 
        starWarsVillains. Also, display the value of the new starWarsVillains variable (Also, make sure the sithLords 
        are first in the new array. Also, you will need a console log for this.)
    2d. Using the slice method on the starWarsVillains array display an array that contains "Darth Vader" and "Darth 
        Sidious" in the terminal/console (You will need a console log for this)
    3a. Create a const variable called droids and set the value to an object with the following key value pairs 
        (astromech: "R2-D2"), (protocol: "C-3PO"), and (assassin: "IG-88")
    3b. Display "R2-D2" from the droids variable/object in terminal/console using square brackets "[]" (You will need 
        a console log for this)
    3c. Display "C-3PO" from the droids variable/object in terminal/console using dot "." (You will need a console log 
        for this)
    3d. In the droids variable/object change the "IG-88" value to "IG-11"
*/

const jedi = [];

jedi[0] = "Luke";
console.log(jedi);

jedi.push("Obi-Wan Kenobi");
console.log(jedi);

jedi.unshift("Yoda");
console.log(jedi);

console.log(jedi[1]);

jedi.pop();
console.log(jedi);

jedi.shift();
console.log(jedi);

const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];

const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];

const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);

console.log(starWarsVillains.slice(0,2));

const droids = {
                astromech: "R2-D2", 
                protocol: "C-3PO", 
                assassin: "IG-88"
               };
console.log(droids);

console.log(droids["astromech"]);

console.log(droids.protocol);

droids.assassin = "IG-11";
console.log(droids.assassin);


// bonus
/*
    4. Using indexes display the "V" from "Darth Vader" from the starWarsVillains array (You will need a console log 
        for this)
    5. Using only negative numbers display "Darth Sidious" from the sithLords array using Slice (You will need a 
        console log for this)
    6a. Create a const variable named starWarsMovies and set the value to an array of three objects (AKA An array with 
        three items in it and each item is a separate object). Use the following keys and values for each object in the 
        array: 1st OBJECT (episodeOne: "The Phantom Menace", episodeTwo: "Attack of the Clones", and 
        episodeThree: "Revenge of the Sith"). 2nd OBJECT (episodeFour: "A New Hope", 
        episodeFive: "The Empire Strikes Back", and episodeSix: "Return of the Jedi"). 3rd OBJECT 
        (episodeSeven: "The Force Awakens", episodeEight: "The Last Jedi", and  episodeNine: "The Rise of Skywalker"). 
        I would suggest using some copy and paste on this one.
    6b. Using an array method add the following string values ("Solo" and "Rogue One") as items in the starWarsMovies 
        array between the 1st and 2nd objects (AKA Items) in the starWarsMovies array.
*/

console.log(starWarsVillains[0][6]);

console.log(sithLords.slice((-1 - -2),(-1 - -3))); /* compared answers with Jack M to make sure I knew what I was 
                                                      doing on this one, his was "sithLords.slice(-4, -3)",
                                                      which also works now that I see it, but I'm leaving mine
                                                      as is because it technically uses only negative numbers */

const starWarsMovies = [
                            {
                                episodeOne: "The Phantom Menace", 
                                episodeTwo: "Attack of the Clones", 
                                episodeThree: "Revenge of the Sith"
                            },
                            {
                                episodeFour: "A New Hope", 
                                episodeFive: "The Empire Strikes Back", 
                                episodeSix: "Return of the Jedi"
                            },
                            {
                                episodeSeven: "The Force Awakens", 
                                episodeEight: "The Last Jedi", 
                                episodeNine: "The Rise of Skywalker"
                            }
                       ];

starWarsMovies.splice(1, 0, "Solo", "Rogue One");
console.log(starWarsMovies);