function addTask() {
    var input = document.getElementById("taskInput");
    var taskText = input.value;

    if (taskText === "") {
        return;
    }

    var li = document.createElement("li");
    li.innerText = taskText;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
