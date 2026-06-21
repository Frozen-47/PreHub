function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const task = taskInput.value.trim();

    if (task) {
        const listItem = document.createElement('li');

     
        const text = document.createTextNode(task);
        listItem.appendChild(text);

   
        const btn = document.createElement('button');
        btn.textContent = "Remove";
        btn.style.marginLeft = "10px";

        btn.onclick = () => removeTask(listItem);

        listItem.appendChild(btn);
        taskList.appendChild(listItem);
        taskInput.value = '';

    } else { 
        alert('Please enter a task.');
    }
}

function removeTask(taskItem) {
    taskItem.remove();
}

function clearTasks() {
    document.getElementById('taskList').innerHTML = '';
}