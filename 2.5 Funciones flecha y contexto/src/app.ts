class TaskList {
    tasks: string[] = [];
    constructor(initialTasks : string[]) {
        this.tasks = initialTasks;
    }

    addTask (task:string) {
        this.tasks.push(task);
    }
    processAllTasks(){
        setTimeout(() => {
            this.tasks.forEach(task => {
                setTimeout(() => {
                    console.log(`Procesando tarea: ${task}`)
                }, 1000);
            });
        }, 1000);
    }
    
}

