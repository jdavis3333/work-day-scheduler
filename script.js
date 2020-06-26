var currentTime;

//Static time (day)
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

//Dynamic time
let updateTime = function () {
    currentTime = moment().format('H')
    $("#time").text(currentTime)
    console.log(currentTime)
}
updateTime();

//save to local storage
$(".btn").click(function() {
    var timeBlock = $(this).attr("id").split("-")[0];
    var userText = $(`#${timeBlock}-input`).val().trim();  
    console.log(timeBlock, userText,`#${timeBlock}-input`);
    localStorage.setItem(timeBlock, userText);
})

//local storage and color blocks
function displayLocalStorage () {
    currentTime = moment().format('H')
    for (let i = 8; i < 18; i++) {
        $(`#${i}-input`).val(localStorage.getItem(i));
        if (i < currentTime) {
            $(`#${i}-input`).addClass("past")
        }else if (i === currentTime) {
            $(`#${i}-input`).addClass("present")
        }else {
            $(`#${i}-input`).addClass("future")
        }
    }
}
displayLocalStorage ();