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
    } else if (currentHour === intHourEls[i]){
        $("div[value='"+ intHourEls[i] +"']").addClass("present");
    } else {
        $("div[value='"+ intHourEls[i] +"']").addClass("future");
    }
}
}

hourEls.forEach(colorCoded);
  

//WHEN I click into a time block
//THEN I can enter an event
     

//WHEN I click the save button for that time block
var saveButton = $(".saveBtn");
saveButton.on("click", saveValue);


function saveValue(e){
    var textEntry = $(".form-control").text;  
    localStorage.setItem("id", textEntry); 
}

//WHEN I refresh the page
//THEN the saved events persist
//get the saved value function - return the value of "v" from localStorage. 
function getSavedValue  (v) {
    if (!localStorage.getItem(v)) {
        return "";// You can change this to your defualt value. 
    }
    return localStorage.getItem(v);
}
getSavedValue();

})




        