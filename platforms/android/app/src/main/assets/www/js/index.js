
var app = {
   
    
    // Application Constructor
    initialize: function() {
    
        document.addEventListener('deviceReady', this.onDeviceReady.bind(this), false);
        document.addEventListener('pauseListener', this.pauseListener.bind(this), false);
        document.addEventListener('resumeListener', this.resumeListener.bind(this), false);
        document.addEventListener('backButtonListener', this.backButtonListener.bind(this), false);

    },

    //When user move to another application
    pauseListener: function(){
        //when app is paused, save list
        saveList(toDoList);
    },

    ///When user returns to the application
    
    resumeListener: function(){
        //when app is resumed load list
    },

    backButtonListener: function(){

        //when backbutton is pressed, exit app
        saveList(toDoList);
        navigator.app.exitApp();

    },

    //load application
    onDeviceReady: function() {

        alert("Application is loaded");

       pauseListener();
       resumeListener();
       backButtonListener();

    },

   

};

app.initialize();