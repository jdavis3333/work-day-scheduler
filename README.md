# work-day-scheduler

The goal of this project was to create a calendar application that allows the user to save events for each hour of the day. It was to run in the browser and feature dynamically updated HTML and CSS powered by JQuery.

## Getting Started

1. Log into GitLab > UCB-Coding-Bootcamp > UCB-BER-FSF-FT-06-2020-U-C
2. Navigate to Third Party APIs Homework (click) 
3. Open VS Code or similar program and follow provided instructions.

### Prerequisites

* Visual Studio Code https://code.visualstudio.com/
* Bootstrap https://getbootstrap.com/
* Momentsjs https://momentjs.com/ 

### Installing

![HW Complete](https://user-images.githubusercontent.com/66157077/85817588-350cef80-b723-11ea-8c60-3bd3318e4f7b.PNG)

* Applied the current date to the jumbotron using the thrid party app momentjs.com
```
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

```
* Saved timeblock entries to local storage
```
$(".btn").click(function() {
    var timeBlock = $(this).attr("id").split("-")[0];
    var userText = $(`#${timeBlock}-input`).val().trim();  
    console.log(timeBlock, userText,`#${timeBlock}-input`);
    localStorage.setItem(timeBlock, userText);
})
```
* Displayed local storage and colored timeblocks 
```
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
```


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* [See Live Site](https://jdavis3333.github.io/work-day-scheduler/.)


## Authors

* Joe Davis

- [Link to Github](https://github.com/jdavis3333)
- [Link to LinkedIn](https://www.linkedin.com/in/joe-davis-a8380232/)


See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License 

