const addButton = document.getElementById('addButton');
const tasks = []
class Task{
    constructor(task, weight){
        this.task = task;
        this.weight = weight;
    }

}

function addTask() {
    const taskList = document.getElementById("taskList");
    const taskInput = document.getElementById("taskInput");
    const weightInput = document.getElementById("weightInput");
    const todo = new Task(taskInput.value, weightInput.value);
    const newTodo = document.createElement("li");
    tasks.push(todo);
    newTodo.innerText = todo.task;
    taskList.appendChild(newTodo);
    updateWeight(calculateWeight())
}

function calculateWeight(){
    return tasks.reduce((acc,task)=>{
        return acc += parseInt(task.weight)
    },0)
}

function updateWeight(weight){
    console.log(weight);
    const weightLabel = document.getElementById("weight")
    weightLabel.innerText = `Total Weight: ${weight}`;
}

addButton.addEventListener("click", addTask);