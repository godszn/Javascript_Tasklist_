window.addEventListener('load', () => {
const toDobtn = document.getElementById('addbtn');
const toDocontainer = document.getElementById('content');
const toDoinput = document.getElementById('inputfield');
const toDodelete = document.getElementById('deletebtn');
const toDoEdit = document.getElementById('Editbtn');
const toDoform = document.getElementById('new-form');
const tolist = document.getElementById('tasks');

toDoform.addEventListener('submit', function (e) {
      e.preventDefault();
      const task = toDoinput.value;
      if (!task) {
        alert("please fill out task");
        return;
      }

      const task_el = document.createElement('div');
      task_el.classList.add('task');

      const task_content_el = document.createElement('div');
      task_content_el.classList.add('lists');
      task_content_el.classList.add('lists.text::not(read-only)');
       
      task_el.appendChild(task_content_el);

      tolist.appendChild(task_el);


      const input_el = document.createElement('input');
      input_el.classList.add('text');
      input_el.type = 'text';
      input_el.value = task;
      input_el.setAttribute("readonly" , "readonly");

      task_content_el.appendChild(input_el)

      const task_actions_el = document.createElement('div');
      task_actions_el.classList.add('actions');

      const task_actions_edit_el = document.createElement('buttons');
      task_actions_edit_el.innerHTML = "Edit";
      task_actions_edit_el.classList.add('editbtn');

      const task_actions_del_el = document.createElement('buttons');
      task_actions_del_el.innerHTML = "Delete";
      task_actions_del_el.classList.add('delbtn');
      
      task_actions_el.appendChild(task_actions_edit_el);
      task_actions_el.appendChild(task_actions_del_el);

      task_el.appendChild(task_actions_el);
      tolist.appendChild(task_el);

      toDoinput.value = "";

    task_actions_edit_el.addEventListener('click' , function () {
     if (task_actions_edit_el.innerText.toLowerCase() == "edit") {
      input_el.removeAttribute('readonly');
      input_el.focus();
      task_actions_edit_el.innerText = "Save";
     }
     else {
      input_el.setAttribute('readonly' , 'readonly');
      input_actions_edit_el.innerText = "Edit";
     }
    })

    task_actions_del_el.addEventListener('click' , function () {
      tolist.removeChild(task_el);
    })

})
})