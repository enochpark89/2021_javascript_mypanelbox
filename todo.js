const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

// to do list array
let toDos = [];


function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit)
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);

}

function loadToDos(){
  // Check the localStorage for existing to-do list and load.
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if(loadedToDos  !== null){
 
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

// Get to-do list and create the list and the button.
function paintToDo(text){

  // create a list
  const li = document.createElement("li");
  // create a delete button.
  const delBtn= document.createElement("button");
  // create a span and ID for each toDo list items.
  const span = document.createElement("span");
  const newId = toDos.length +1;
  delBtn.innerHTML="✔ Done";

  // if delete button is clicked, the item gets deleted - deleteToDo()
  delBtn.addEventListener("click", deleteToDo);
  span.innerHTML = text + "&nbsp&nbsp";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj= {
    text: text, 
    id: newId
  };
  toDos.push(toDoObj);
  saveToDos();
}

function deleteToDo(event)
{
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  console.log(event.target.parentNode);
  const clearnToDos = toDos.filter(function(toDo){
    return toDo.id !== parseInt(li.id);
  });
  toDos = clearnToDos;
  saveToDos();
}


function filterFn(toDo){
  return toDo.id === 1;
}


function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}





// execute the function init()
init();