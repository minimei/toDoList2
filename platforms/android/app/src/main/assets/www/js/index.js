
var app = {
    // Application Constructor
    initialize: function() {

        // DeviceReady = Main
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
        //When user move to another application
        document.addEventListener('pause', this.pauseListner.bind(this), false);

        ///When user returns to the application
        document.addEventListener('resume', this.resumeListner.bind(this), false);

    },

    onDeviceReady: function() {

        alert("Application is loaded");
   
    },

    pauseListner: function(){
        alert("Application is paused");
        //save state
    },

    resumeListner: function(){
        alert("Application is resumed");
        //load the saved state and update the UI
    }

};

app.initialize();