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
