

//Static time (day)
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));


//Dynamic time
let updateTime = function () {
    let currentTime = moment().format('h:mm:ss')
    $("#time").text(currentTime)
    console.log(currentTime)
}
updateTime();

//Dynamically update blocks based on time




//Save timeblock text to local storage









