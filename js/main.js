class toDoClass {
	constructor() {
		this.TASKS = [
			{
				task: 'Go to Dentist',
				isComplete: false
			},
			{
				task: 'Do Gardening',
				isComplete: true
			},
			{
				task: 'Renew Library Account',
				isComplete: false
			}
		]
		this.loadTasks();
	}
	loadTasks() {
		let tasksHtml = this.TASKS.reduce(((html, task, index) => html+=this.generateTaskHtml(task, index)),'');
		document.getElementById('taskList').innerHTML = tasksHtml;
	}

	toggleTaskStatus(index) {
		this.TASKS[index].isComplete = !this.TASKS[index].isComplete;
		this.loadTasks();
		
	}
	deleteTask(event, taskIndex){
		event.preventDefault();
		this.TASKS.splice(taskIndex ,1);
		this.loadTasks();
	}
	addTaskClick()
	{
		let target = document.getElementById('addTask');
		target.innerHTML=`<input type="text" id="task" value="" name="task">`;
		let add = document.getElementById('addBtn');
		add.className = "btn btn-success";
		add.innerHTML = "Confirm";
		let click = document.getElementById('cancelBtn');
		click.innerHTML=`<button class="btn btn-danger" onclick="toDo.cancelAdd()">Cancel</button>`;
		
		let taskIn = document.getElementById('task');
		let taskName = taskIn.value;
		add.classList.onclick = "toDo.addTask(${taskName})";
		
	}
	addTask(x)
	{
		alert(x);
	}
	cancelAdd()
	{
		let target = document.getElementById('addTask');
		target.innerHTML = ``;
		let add = document.getElementById('addBtn');
		add.className = "btn btn-primary";
		add.innerHTML = "Add";
		let click = document.getElementById('cancelBtn');
		click.innerHTML = ``;
	}
	generateTaskHtml(task, index) {
		return `
		<li class="list-group-item checkbox">
		<div class="row">
			<div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
				<label>
					<input 
						id="toggleTaskStatus" 
						type="checkbox" 
						onchange="toDo.toggleTaskStatus(${index})" 
						value="" class="" ${task.isComplete?'checked':''}
						>
				</label>
			</div>

			<div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text ${task.isComplete ? 'complete' : ''}">
				${task.task}
			</div>
 
			<div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
				<a 
				class="" 
				href="/" 
				onclick="toDo.deleteTask(event, ${index})">
					<i 
					id="deleteTask" 
					data-id="${index}" 
					class="delete-icon glyphicon glyphicon-trash"></i>
				</a>
			</div>
		</div>
		</li>
		`
		;
	}
}

window.addEventListener("load", () => {
	toDo = new toDoClass();
});

