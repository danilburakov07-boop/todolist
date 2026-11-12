

let button = document.querySelector("button");
let input = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

button.addEventListener("click", function() {

    let task = input.value.trim();

    if (task === "") {
        alert("Enter a task!");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = task;

    
    span.addEventListener("click", function() {
        span.classList.toggle("completed");
    });

    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    input.value = "";
});