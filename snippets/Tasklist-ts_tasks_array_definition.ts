export class TaskListPage {

    /************************* Add this code ************************/

    //Defines the tasks array as an array of generic Objects
    tasks: Array<Object> = [];

    /************************* Add this code ************************/

    constructor(public navCtrl: NavController) {

        /************************* Add this code ************************/

        //Set our tasks array to some dummy tasks for testing purposes 
        this.tasks = [
            { title: 'Milk', status: 'open' },
            { title: 'Eggs', status: 'open' },
            { title: 'Syrup', status: 'open' },
            { title: 'Pancake Mix', status: 'open' }
        ];

        /************************* Add this code ************************/
    }

}