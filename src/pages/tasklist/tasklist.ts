import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  //Selector (tag) to use on main page to load the component
  selector: 'page-home',
  templateUrl: 'tasklist.html'
  //HTML template for the TaskList component
})
//TaskList component class declaration
export class TaskListPage {

  constructor(public navCtrl: NavController) {

  }

}
