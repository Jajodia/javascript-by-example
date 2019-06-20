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
	getDocIn()
	{
		let x = document.getElementById('addTask');
		return x;
	}
	getDocConfirm() {
		let x = document.getElementById('confirm');
		return x;
	}
	getDocCancel() {
		let x = document.getElementById('cancel');
		return x;
	}
	getDocAdd()
	{
		let x = document.getElementById('add');
		return x;
	}
	

	addTaskClick() {
		let x = this.getDocIn();
		x.classList.remove("hide");
		let y = this.getDocConfirm();
		y.classList.remove("hide");
		let z = this.getDocCancel();
		z.classList.remove("hide");
		let w = this.getDocAdd();
		w.classList.add("hide");
	}
	confirmAdd() {
		let target = this.getDocIn();
		this.addTask(target.value);
		target.value = "";
	}
	cancelAdd() {
		let x = this.getDocIn();
		x.classList.add("hide");
		let y = this.getDocConfirm();
		y.classList.add("hide");
		let z = this.getDocCancel();
		z.classList.add("hide");
		let w = this.getDocAdd();
		w.classList.remove("hide");
	}
	addTask(task) {
		
		let newTask = {
			task,
			isComplete: false,
		};
		let parentDiv = document.getElementById('addTask').parentElement;
		if( task === '') {
			parentDiv.classList.add("has-error");
		}
		else {
			parentDiv.classList.remove("has-error");
			this.TASKS.push(newTask);
			this.loadTasks();
			this.cancelAdd();
		}
		
	}

	toggleTaskStatus(index) {
		this.TASKS[index].isComplete = !this.TASKS[index].isComplete;
		this.loadTasks();
		
	}
	deleteTask(event, taskIndex) {
		event.preventDefault();
		this.TASKS.splice(taskIndex ,1);
		this.loadTasks();
	}
	generateTaskHtml(task, index) {
		return `
		<li class="task checkbox ${task.isComplete ? 'success' : ''}">
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

