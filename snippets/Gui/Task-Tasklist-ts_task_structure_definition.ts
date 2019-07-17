//Task.ts file

/********************** Add this code ***********************/

//Defines the Task structure (title and status)
export class Task {
    title: string;
    status: string;
}

/********************** Add this code ***********************/




//Tasklist.ts file

/********************** Add this code ***********************/

import { Task } from '../task';

/********************** Add this code ***********************/

export class TaskListPage {

    /********************* Update this code *********************/

    //Defines the tasks array as an array of Task objects
    tasks: Array<Task> = [];

    markAsDone(slidingItem: ItemSliding, task: Task) {
    }


    removeTask(slidingItem: ItemSliding, task: Task) {
    }

    /********************* Update this code *********************/

}