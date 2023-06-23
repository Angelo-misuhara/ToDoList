let toggle_dark = document.querySelector('#toggle_checkbox');
let isDark = true;
let body = document.querySelector("body");
let navbar = document.querySelector(".navbar-brand");
let label = document.querySelector('label');

toggle_dark.addEventListener('click', function () {
  
  if (isDark === true) {
    body.style.backgroundColor = 'black';
    navbar.style.color = 'white';
    body.style.transition = '2s'
    label.style.borderColor = 'white'
    isDark = false;
  } else {
    body.style.backgroundColor = 'white';
    navbar.style.color = 'black';
    body.style.transition = '2s'
    label.style.borderColor = 'black'
    isDark = true;
  }
});
///////////////////////////////////
let btnAdd = document.querySelector('#button-addon2');
let textInput = document.querySelector('.form-control');
let textContainer = document.querySelector('#containerText');

btnAdd.addEventListener('click', function () {
  
  let task = document.createElement('div');
  task.classList.add('task');

  let li = document.createElement('li');
  li.innerText = textInput.value;
  task.appendChild(li);


  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fa-solid fa-check"></i>';
  deleteButton.innerText = 'Remove';
  deleteButton.classList.add('deleteTask');
  task.appendChild(deleteButton);

  if (textInput.value === "") {
    alert("please input a task");
  } else {
    textContainer.appendChild(task);
    textInput.value = ""; 
  }

});

textContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('checkTask')) {
    let li = event.target.parentNode.querySelector('li');
    li.style.backgroundColor = 'green';
  } else if (event.target.classList.contains('deleteTask')) {
    event.target.parentNode.remove();
  }
});



