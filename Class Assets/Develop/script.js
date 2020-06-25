var currentTime;
var timeArr = [1,2,3,4,5,8,9,10,11,12]



//Static time (day)
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


//Dynamic time
let updateTime = function () {
    currentTime = moment().format('h:mm:ss')
    $("#time").text(currentTime)
    console.log(currentTime)
}
updateTime();

//Dynamically update blocks based on time
var currentTimeFloor = Math.floor(currentTime);
console.log(currentTimeFloor); 
//why is console log returning Nan? 
// if 



//Save timeblock text to local storage

var savedText = [];

$("#btn").click(function() {
    savedText.push($("input.form-control"))
    localStorage.setItem("hour", JSON.stringify(savedText));
    
})







