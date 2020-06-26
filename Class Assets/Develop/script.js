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

//Dynamically update block color based on time

// var blockTime = parseInt($(this).attr("id"));
// console.log(blockTime)

// if (currentTime === blockTime) {
//     .form-control to .present
// }
//     if else {(currentTime > blockTime)
//     .form-control to .past
//     }
//     else {
//     .form-control to .future
//     }
// }


//Save timeblock text to local storage

// var savedText = $("#input-group-text").value.trim();

$(".btn").click(function() {
    var timeBlock = $(this).attr("id").split("-")[0];
    var userText = $(`#${timeBlock}-input`).val().trim();  //"#"+textBlock+"-input"
    console.log(timeBlock, userText,`#${timeBlock}-input`);
    localStorage.setItem(timeBlock, userText);

    // console.log(savedText);
})

function displayLocalStorage () {
    for (let i = 8; i < 18; i++) {
        $(`#${i}-input`).val(localStorage.getItem(i));
    }
}
displayLocalStorage ();
