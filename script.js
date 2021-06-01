//setting variables
var current = moment();
var nine = $("9")
var ten = $("10")
var eleven = $("11")    
var twelve = $("12")
var one = $("1")
var two = $("2")
var three = $("3")
var four = $("4")
var five = $("5")

saveData();
var saveBtn = $(".saveBtn");

saveBtn.on("click", function() {
    var current = $(this).parent().attr("id");
    var event = $(this).siblings(".event").val();

    localStorage.setItem(current,event);
})
