(function(){
	//variables
	let list = document.getElementById("lista"),
		taskInput = document.getElementById("tareaInput"),
		buttonNewTask = document.getElementById("btn-agregar");
		//functions
		let addTask = function(){
			var task = taskInput.value,
			newTask= document.createElement("li")
			link = document.createElement("a"),
			content = document.createTextNode(task);
			if (task=== ""){
				taskInput.setAttribute("placeholder","Agrega una tarea valida");
				taskInput.className = "error";
				return false;
			}
			//Agregamos el contenido al enlace
			link.appendChild(content);
			//Agregamos el atributo href
			link.setAttribute("href","#");
			//Agregamos a la nueva tarea el enlace.
			newTask.appendChild(link);
			//agregamos la nueva tarea a la lista.
			list.appendChild(newTask);

			//limpiar el texto una vez añadido
			taskInput.value = "";
			//Recorremos la lista de nuevo para añadirle el listener a la 
			//nueva linea de la lista.
			for(let i=0; i < list.children.length;i++){
				list.children[i].addEventListener("click" , removeTask);
			}

		};
		let checkInput = function(){
			taskInput.className="";
			taskInput.setAttribute("placeholder","Agrega tu tarea");
		};
		let removeTask= function(){
			this.parentNode.removeChild(this);
		}; 
		//Events

		//add New Task
		buttonNewTask.addEventListener("click",addTask);

		//Check Input
		taskInput.addEventListener("click",checkInput);
		for(let i=0; i < list.children.length;i++){
			list.children[i].addEventListener("click" , removeTask);
		}
}());