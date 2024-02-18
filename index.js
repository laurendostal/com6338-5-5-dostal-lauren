var form = document.querySelector('form')
var todoList = document.getElementById('todo-list')


form.onsubmit = function(e) {
    e.preventDefault();

    var input = document.querySelector('input');

    /* Check for no value or only spaces */
    if (!input.value.trim()) {
        input.value = "";
        return;
    }
 
    var li = document.createElement("li");

    var btn = document.createElement("button");

    btn.textContent = input.value;

    li.appendChild(btn);

    todoList.appendChild(li);

    input.value = "";

    btn.onclick = function() {
        if (btn.style.textDecoration == "line-through") {
            btn.parentElement.remove();
        } else {
            btn.style = 'text-decoration: line-through';
        }
    }    
}