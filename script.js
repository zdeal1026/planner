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

//color coding timeblocks which is preset in css
