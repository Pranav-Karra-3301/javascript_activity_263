// pranav karra
// cmpsc 263 - part 2 dom manipulation

const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// when the button is clicked, grab the text and add it to the list
addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    const span = document.createElement("span");
    span.className = "task-text";
    span.textContent = taskText;

    // cross out text when checked
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "#999";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "#333";
        }
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    taskList.appendChild(li);

    // clear input after adding
    taskInput.value = "";
});

// also let the user press enter to add
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addBtn.click();
    }
});
