function addTask() {
    const taskInput = document.getElementById('taskInput');//placeholder value{when user puts input}
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');//added list

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    listItem.addEventListener('click', function() {
        listItem.classList.toggle('completed');
    });

    listItem.addEventListener('dblclick', function() {
        taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
}
