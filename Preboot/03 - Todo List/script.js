function addTodo() {
    const todoInput = document.getElementById('todoInput');
    const task = todoInput.value.trim();
    
    if (task !== '') {
        const li = document.createElement('li');
        li.textContent = task;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            li.remove();
        };
        
        li.appendChild(removeButton);
        document.getElementById('todoList').appendChild(li);
        todoInput.value = '';
    }
}
