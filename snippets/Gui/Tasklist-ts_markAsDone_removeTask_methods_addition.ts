export class TaskListPage {

    /*************************** Add this code *************************/
    
    //Marks a task as done
    markAsDone(task: Object) {
        //Update status property of the task
        task.status = "done";
    }

    //Removes a task from the array
    removeTask(task: Object) {
        //Update status property of the task
        task.status = "removed";
        let index = this.tasks.indexOf(task);
        if (index > -1) {
            //Removes the task from the array at a specific position
            this.tasks.splice(index, 1);
        }
    }

    /*************************** Add this code *************************/
}