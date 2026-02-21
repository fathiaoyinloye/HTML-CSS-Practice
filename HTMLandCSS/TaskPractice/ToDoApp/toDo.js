const addButton = document.querySelector(".plus");
const tasks = document.querySelector(".tasks");
const todoBody = document.querySelector(".todoBody");
const addToDo = document.querySelector(".AddTodo");
const taskInput = addToDo.querySelector("input");

let localStorageData = JSON.parse(localStorage.getItem('task')) || [];
localStorageData.forEach(taskAdded => {
    createItem(taskAdded);
});



addButton.addEventListener("click", () => {
  const inputValue = taskInput.value.trim();

  if (inputValue == "") alert("Input cannot be blank");
  else {
    const newTask = document.createElement("div");

    createItem(inputValue)
    localStorageData.push(inputValue);
    localStorage.setItem('task', JSON.stringify(localStorageData))
    console.log(todoList);

  }
});
function createItem(eachText){
  const newTask = document.createElement("div");

    newTask.classList.add("newTask");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("li");
    text.textContent = eachText;

    const newTaskButton = document.createElement("div");
    newTaskButton.classList.add("newTaskButton");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";

    deleteButton.addEventListener("click", () => {
      newTask.remove();
      deleteTask(newTask.querySelector('li').textContent)
    });
    taskInput.value = "";
    newTaskButton.append(deleteButton);
    newTask.append(checkbox, text, newTaskButton);
    tasks.append(newTask);

}



function deleteTask(task){
  for(let index = 0; index < localStorageData.length; index++){
    if(localStorageData[index] === task){
      localStorageData.splice(index, 1)
      break;
    }
  }

  localStorage.setItem('task', JSON.stringify(localStorageData));
}