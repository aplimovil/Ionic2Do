export class TaskListPage {

    /************************* Add this code ************************/

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

    /************************* Add this code ************************/


}