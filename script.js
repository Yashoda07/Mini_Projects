function addTask() {
    const input = document.getElementById('inputTask')
    const taskList = document.getElementById('taskList')

    if (input.value === "") {
        alert("Please enter a task")
        return
    }

    const newTask = document.createElement('li')
    newTask.textContent = input.value
    taskList.appendChild(newTask)

    input.value = ""
    deleteTask(newTask)
}

function deleteTask(newTask) {
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)

    deleteBtn.onclick = function () {
        newTask.remove()
    }
}

