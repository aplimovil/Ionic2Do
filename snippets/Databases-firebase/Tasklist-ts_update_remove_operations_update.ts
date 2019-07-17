export class TaskListPage {

    /************************* Update this code ***********************/
    
    //Marks a task as done
    markAsDone(slidingItem: ItemSliding, task: Task) {
        //Update status property of the task
        task.status = "done";
        //Updates the task record in the database
        this.taskList.update(task.id, task)
        //Close the sliding item component
        setTimeout(() => { slidingItem.close(); }, 1);
    }

    //Removes a task from the array
    removeTask(slidingItem: ItemSliding, task: Task) {
        //Update status property of the task
        task.status = "removed";
        //Removes the task record in the database
        this.taskList.remove(task.id);
        //Close the sliding item component
        setTimeout(() => { slidingItem.close(); }, 1);
    }

    /************************* Update this code ***********************/

}