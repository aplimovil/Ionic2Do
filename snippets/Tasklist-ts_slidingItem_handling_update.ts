import { Component } from '@angular/core';

/******************** Update this code **********************/

import { NavController, ItemSliding } from 'ionic-angular';

/******************** Update this code **********************/


export class TaskListPage {

    //Marks a task as done

    /******************** Update this code **********************/
    markAsDone(slidingItem: ItemSliding, task: Object) {
    /******************** Update this code **********************/

        //Update status property of the task
        task.status = "done";

        /******************** Update this code **********************/
        //Close the sliding item component
        setTimeout(() => { slidingItem.close(); }, 1);
        /******************** Update this code **********************/

    }

    //Removes a task from the array
    /******************** Update this code **********************/
    removeTask(slidingItem: ItemSliding, task: Object) {
    /******************** Update this code **********************/

        //Update status property of the task
        task.status = "removed";
        let index = this.tasks.indexOf(task);
        if (index > -1) {
            //Removes the task from the array at a specific position
            this.tasks.splice(index, 1);
        }

        /******************** Update this code **********************/
        //Close the sliding item component
        setTimeout(() => { slidingItem.close(); }, 1);
        /******************** Update this code **********************/

    }

}