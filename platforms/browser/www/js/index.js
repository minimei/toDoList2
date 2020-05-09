
var app = {
   
    
    // Application Constructor
    initialize: function() {
    
        //cordova events
        document.addEventListener('deviceReady', this.onDeviceReady.bind(this), false);
        document.addEventListener('pauseListener', this.pauseListener.bind(this), false);
        document.addEventListener('resumeListener', this.resumeListener.bind(this), false);
        document.addEventListener('backButtonListener', this.backButtonListener.bind(this), false);

        //application events
        
        //listen to add btn
        $( "#addBtn" ).click(this.handleUserInput);
        
    },

    //When user move to another application
    pauseListener: function(){

        alert("paused");
        //when app is paused, save list
        //saveList(toDoList);
    },

    ///When user returns to the application
    
    resumeListener: function(){
        //when app is resumed load list
    },

    backButtonListener: function(){

        //when backbutton is pressed, exit app
        //saveList(toDoList);
       //navigator.app.exitApp();

    },

    handleUserInput: function(){
        
        //create element
        var li = $("<li>");
        //get element by value
        var inputValue = $("#userInput").val();
        //create text node later
        var textNode = li.append(inputValue);

        //validate if user input data
        if(inputValue === ''){
            alert("You must write something!");
        }
        else{ 
            //append user input data to <li> 
            textNode;
            $('#myUL').prepend(li);
        } 
        inputValue = " ";

        //reset textfield
        $("#container").find('input:text').val('')
        
       
        
    },

    //load application

    onDeviceReady: function() {

        alert("Application is loaded");

       pauseListener();
       resumeListener();
       backButtonListener();

       
       




       

    }

};

app.initialize();