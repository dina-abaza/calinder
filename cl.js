let date=document.getElementById("date");
let day=document.getElementById("day");
let month=document.getElementById("month");
let year=document.getElementById("year");


let today =new Date();
let weekDays = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
let allMonths = ['january','february','march','april','may','june','july','august','september','october','november','december'];


if (today.getDate() < 10) {
    date.innerHTML = "0" + today.getDate();
} else {
    date.innerHTML = today.getDate();
}

day.innerHTML = weekDays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();