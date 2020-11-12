// JavaScript function that wraps everything
//$(document).ready(function() {

//WHEN I open the planner the current day is displayed at the top of the calendar
var currentDayEl = $("#currentDay");
var now = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(now);

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hour
var currentHour = moment().hour();
console.log(currentHour);
var hourEls = [];

var hours = $(".hourEl");
 hours.each(function(){
     hourEls.push($(this).attr("value"));                      
 });

 var hourBlocks = $(".hour");
 

 //WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

function colorCoded (){
    hourEls = parseInt(hourEls);
    console.log(hourEls);
    if (currentHour < hourEls[hourDiv]){
        hourBlocks.addClass(".past");
    }
    if (currentHour == hourEls[hourDiv]){
        hourBlocks.addClass(".present");
    }
    if (currentHour > hourEls[hourDiv]){
        hourBlocks.addClass(".future");
    }
}

hourEls.forEach(colorCoded);
  

//WHEN I click into a time block
//THEN I can enter an event
var textEntry = $(".form-control");
textEntry.on("keypress", function (writeEvent){
    writeEvent.preventDefault();

})
//WHEN I click the save button for that time block
var saveButton = $(".saveBtn");
saveButton.on("click", function (saveEvent) {
    saveEvent.preventDefault();
    //THEN the text for that event is saved in local storage
    localStorage.setItem("time", textValue);
    console.log("I clicked it");
}
)
//WHEN I refresh the page
//THEN the saved events persist

