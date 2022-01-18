/** 
 * take in the name 
 * have a click event listener that adds the names into list (submit) --event.preventDefault
 * check as long as it has a length
 * put the names in an array
 * store the array in local storage
 * randomize the list of names in local storage
 * 
 */

// variables
const studentName = document.getElementById("student");
const students = []; 
const formEl = document.getElementById("submit");
// functions
function readForm(event) {
    event.preventDefault();
    console.log("readForm");
    
}
// special functions
formEl.addEventListener("click", readForm);
// logic 