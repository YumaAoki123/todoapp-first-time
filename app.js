$("#addTodo").click(function (){
    addTodo();
});

$("#input").keypress(function(event) {
    if (event.keyCode === 13) { // エンターキーのキーコードは13
        addTodo();
    }
});

function addTodo() {
    const inputTodo = $("input").val();
    if (inputTodo.trim() !== "") {
        const todoItem = $("<li><input type='checkbox'>" + inputTodo + "<button class='deleteTodo'>削除</button></li>");
        todoItem.find(".deleteTodo").click(function() {
            $(this).parent().remove();
        });
        $("#Todolist").append(todoItem);
        $("input").val("");
    }
}
$(document).on("change","input[type=checkbox]", function(){
    if($(this).is(":checked")){
        $(this).parent().css("text-decoration","line-through");
        $(this).parent().css("color","#ccc");
    } else {
        $(this).parent().css("text-decoration","none");
        $(this).parent().css("color","#000");
    }
});