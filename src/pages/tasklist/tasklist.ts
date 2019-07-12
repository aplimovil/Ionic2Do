import { Component } from '@angular/core';
import { NavController, ItemSliding } from 'ionic-angular';
import { Task } from '../task';

@Component({
  //Selector (tag) to use on main page to load the component
  selector: 'page-home',
  templateUrl: 'tasklist.html'
  //HTML template for the TaskList component
})
//TaskList component class declaration
export class TaskListPage {

  //Defines the tasks array as an array of Task objects
  tasks: Array<Task> = [];

  constructor(public navCtrl: NavController) {

    //Set our tasks array to some dummy tasks for testing purposes 
    this.tasks = [
      { title: 'Milk', status: 'open' },
      { title: 'Eggs', status: 'open' },
      { title: 'Syrup', status: 'open' },
      { title: 'Pancake Mix', status: 'open' }
    ];
  }

  //Adds a task to the list in the array
  addItem() {
    /*For now, we will use the standard prompt method to display a 
    dialog to allow the user to enter a new task title*/
    let theNewTask: string = prompt("New Task");

    //If the dialog text is not empty ...
    if (theNewTask !== '') {

      //This will be included in a generic object that is pushed onto our tasks array
      this.tasks.push({ title: theNewTask, status: 'open' });
    }
  }

  //Marks a task as done
  markAsDone(slidingItem: ItemSliding, task: Task) {
    //Update status property of the task
    task.status = "done";
    //Close the sliding item component
    setTimeout(() => { slidingItem.close(); }, 1);
  }

  //Removes a task from the array
  removeTask(slidingItem: ItemSliding, task: Task) {
    //Update status property of the task
    task.status = "removed";
    let index = this.tasks.indexOf(task);
    if (index > -1) {
      //Removes the task from the array at a specific position
      this.tasks.splice(index, 1);
    }
    //Close the sliding item component
    setTimeout(() => { slidingItem.close(); }, 1);
  }

}
