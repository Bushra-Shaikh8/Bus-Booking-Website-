const dateInput = document.getElementById("travelDate");
const today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

if (day < 10) {
    day = '0' + day;
}
if (month < 10) {
    month = '0' + month;
}

const formattedDate = year + "-" + month + "-" + day;
dateInput.min = formattedDate;


function checkSameCity() {
    const leavingFrom = document.getElementById("leavingFrom").value;
    const goingTo = document.getElementById("goingTo").value;

    if (leavingFrom === goingTo) {
        alert("Leaving From and Going To cannot be the same city. Please choose different cities.");
        return false;
    }
    return true;
}

document.getElementById("searchForm").onsubmit = checkSameCity;
