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
let students = []; 
const formEl = document.getElementById("submit");
let studentList = document.getElementById("student-list");
const randomButt = document.getElementById("random"); 

// functions
function readForm(event) {
    event.preventDefault();
    console.log("readForm");
    const tempName = studentName.value.trim();
    if (tempName){
        students.push(tempName);
        localStorage.setItem("names", JSON.stringify(students));
    } else {
        alert("Name required. Try again.");
    }
}

function init() {
    const tempList = localStorage.getItem("names");
    if (tempList) {
        students=JSON.parse(tempList);
        renderList();
    }
    console.log("init", students);
}

function renderList() {
    for (let index = 0; index < students.length; index++) {
        const student = students[index];
        const newLi = document.createElement("li");
        newLi.textContent=student;
        studentList.appendChild(newLi);
    }
}

function randomizeList(event) {
    event.preventDefault();
    console.log("hold on to your butts"); 
    let tempRando = [...students]; 
    let randoList = []
    while (tempRando.length > 0) {
        let index = Math.floor(Math.random()*tempRando.length)
        randoList.push(...tempRando.splice(index, 1));       
    }
    console.log(randoList); 
    /**
     * create new empty array
     * pick out parts of the array randomly
     * move them to our new array one at a time
     * splice
     * 
     */
}

// special functions
formEl.addEventListener("click", readForm);
randomButt.addEventListener("click", randomizeList); 

// logic 

init(); 