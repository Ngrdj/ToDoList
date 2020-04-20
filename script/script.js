let todo = {
done: false,
libelle: 'faire la todo list',
id:'1'
}

const toDoInput = document.getElementById("toDoInput");
const toDoList = document.getElementById("toDoList");

document.addEventListener("keydown", event => {
  if (event.keyCode === 13) {
      createToDo();  
  }
});

function createToDo() {
    if(toDoInput.value === ""){
        alert("veuillez entrer une tâche à réaliser")
    }
    else{
        const item = document.createElement("li");
        item.innerHTML = toDoInput.value;
        
        toDoList.appendChild(item);
    }
}