
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
        $( "#addBtn").click(this.userDataSave);

        // Add a "checked" symbol when clicking on a list item
        var list = document.querySelector('ul');
        list.addEventListener('click', function(ev) {
                                if (ev.target.tagName === 'LI') {
                                ev.target.classList.toggle('checked');}}, false);
                                                                            

    },

    //When user move to another application
    pauseListener: function(){

        alert("paused");
    },

    ///When user returns to the application
    
    resumeListener: function(){
        //when app is resumed load list
        
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        tasks.forEach(function(tasks){
        //for each task in loaded task list, append an item to the ul element
        $('#myUL').prepend($("<li>").text(tasks));
       

        });
    },

    backButtonListener: function(){

        //when backbutton is pressed, exit app
       this.userDataSave();
       navigator.app.exitApp();

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

        //reset textfield after user submit
        $("#container").find('input:text').val('')
           
    },

    userDataSave: function(){

        const acceptInput = $("#userInput").val();

        //load current tasks or empty array
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        tasks.push(acceptInput);

        //persist updated task list to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
        /*var saveList= {};
        $("#userInput").each(function(){
            saveList[this.id] = this.value;
        })
        localStorage.setItem('addButtonString', JSON.stringify(saveList));

        console.log(localStorage.getItem('addButtonString'));
        console.log(JSON.parse(localStorage.getItem('addButtonString')));*/
    },


    //load application

    onDeviceReady: function() {

        alert("Application is loaded");

       pauseListener();
       resumeListener();
       backButtonListener();
       handleUserInput();


        


       

    }

};

app.initialize();