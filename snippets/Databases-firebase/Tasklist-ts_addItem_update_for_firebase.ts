export class TaskListPage {

    /************************************************** Update this code *********************************************/

    addItem() {
        //Checks if running platform is native (Android or iOS Phone)
        if (this.platform.is('cordova')) {
            //Displays a native Dialog window according to background SO look and feel
            this.dialogs.prompt('Add a task', 'Ionic2Do', ['Ok', 'Cancel'], '')
                .then(
                    theResult => {
                        //If Ok button is pressed and text is not empty ...
                        if (theResult.buttonIndex == 1 && theResult.input1 !== '') {
                            //Prepares a task item addition in the Firebase database
                            const newTaskRef = this.taskList.push({ id: '', title: theResult.input1, status: 'open' });
                            //Updates the remote database
                            newTaskRef.update({ id: newTaskRef.key });
                        }
                    }
                )
            //If running platform is not native (local browser for example)    
        } else {
            let theNewTask: string = prompt("New Task");
            //If there is text to insert ...
            if (theNewTask != undefined && theNewTask !== '') {
                //Prepares a task item addition in the Firebase database
                const newTaskRef = this.taskList.push({ id: '', title: theNewTask, status: 'open' });
                //Updates the remote database
                newTaskRef.update({ id: newTaskRef.key });
            }
        }
    }

     /************************************************** Update this code *********************************************/

}