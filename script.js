//sets header data 
function planner() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var event = localStorage.getItem(id);

        if (event !== null) {
            $(this).children(".event").val(event);
        }
    });
}

//runs the function
planner();

//saves text to local storage
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var current = $(this).parent().attr("id");
    var event = $(this).siblings(".event").val();

    localStorage.setItem(current,event);
})

//color coding timeblocks which i commented out in css
var daytime = [ "9" , "10" , "11" , "12" , "13" , "14", "15", "16", "17" ]

function timeColor() {
    var timeNow = moment().format("H");

    for(var i = 0; i < daytime.length; i++) {

        if (parseInt(daytime[i]) > timeNow) {
            $("#" + daytime[i]).attr("style", "background-color: lightgreen");
        //future
        } else if (parseInt(daytime[i]) < timeNow) {
            $("#" + daytime[i]).attr("style", "background-color: pink");
         //past   
        } else if  (parseInt(daytime[i]) == timeNow) {
            $("#" + daytime[i]).attr("style", "background-color:grey");
        //current
        }
    }
}

//runs function
timeColor()

