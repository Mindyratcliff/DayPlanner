// JavaScript function that wraps everything
$(document).ready(function() {

//WHEN I open the planner the current day is displayed at the top of the calendar
var currentDayEl = $("#currentDay");
var now = moment().format("dddd, MMMM Do YYYY");
currentDayEl.text(now);

//WHEN I scroll down
//THEN I am presented with time blocks for standard business hour
var currentHour = moment().hour();
var hourEls = [];

var hours = $(".hourEl");
 hours.each(function(){
     hourEls.push($(this).attr("value"));                      
 });
 
 

 //WHEN I view the time blocks for that day
//THEN each time block is color-coded to indicate whether it is in the past, present, or future

function colorCoded (){
    var intHourEls = hourEls.splice(',').map(Number);
    console.log(intHourEls);
    console.log(currentHour);
    for (var i = 0; i < intHourEls.length; i++){
    if (currentHour > intHourEls[i]){
        $("div[value='"+ intHourEls[i] +"']").addClass("past");
        $(".form-control[value='"+ intHourEls[i] +"']").addClass("past");
    } else if (currentHour === intHourEls[i]){
        $("div[value='"+ intHourEls[i] +"']").addClass("present");
        $(".form-control[value='"+ intHourEls[i] +"']").addClass("present");
    } else {
        $("div[value='"+ intHourEls[i] +"']").addClass("future");
        $(".form-control[value='"+ intHourEls[i] +"']").addClass("future");
    }
}
}

hourEls.forEach(colorCoded);
  

//WHEN I click into a time block
//THEN I can enter an event
     

//WHEN I click the save button for that time block
$(".saveBtn").each(function(){
    $(this).on("click", saveValue)
});



function saveValue(){
    $(".form-control").each(function(){
        localStorage.setItem($(this).attr("value"), $(this).val());
        
    });
}

//WHEN I refresh the page
//THEN the saved events persist

function loadValues(){
    $(".form-control").each(function(){
        var savedValues = localStorage.getItem($(this).attr("value"));
        $(this).val(savedValues);
    })
}
loadValues();

})




        