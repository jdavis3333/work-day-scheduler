# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.


<!-- 0. create the empty blocks for DONE
    -use bootstrap to create 9 blocks
    -left block will have static time displayed
    -center block will be editable 
    -right block will be a button for saving -->

<!-- 1. display the current day at the top of the calendar DONE -->

2. color code the time blocks
<!-- -put dynamic time in JS DONE -->
<!-- -create id's for each time block DONE -->
-create if statement: if it's within the dynamic time, refelct that to corresponding ID. if else the time is past, color =x, etc.

4. on save button, save the text for the event into local storage
create a .click for the button class that will save the input to the local storage.

5. make sure the events are not rewritten when page is refreshed.

<!-- re-read documentation

say ok, what is the time now. moment allows you to compare dates. use the functionality built in. use (is the time now, within one of the blocks?) convert a regurlar js date into a moment object. then compare them. process of associating time block with time = you can spcify with moment the format of the string it should consume. make sure comparing apples to apples. make sure to spcify the format. 

option: -->