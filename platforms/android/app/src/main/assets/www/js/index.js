
var app = {
   
    
    // Application Constructor
    initialize: function() {
    
        //Cordova events
        document.addEventListener('deviceReady', this.onDeviceReady.bind(this), false);
        document.addEventListener('pauseListener', this.pauseListener.bind(this), false);
        document.addEventListener('resumeListener', this.resumeListener.bind(this), false);
        document.addEventListener('backButtonListener', this.backButtonListener.bind(this), false);
  
        //Application Events
        
            //Listen to add btn
            $( "#addBtn" ).click(this.handleUserInput);
            //Listen to add btn to save each data to local storage
            $( "#addBtn").click(this.userDataSave);

            // Add a "checked" symbol when clicking on a list item
            var list = document.querySelector('ul');
            list.addEventListener('click', this.checkItem.bind(this), false);
    

            
 },

         checkItem: function(ev){

            if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');}

            },

         //When user move to another application
        pauseListener: function(){
        e.preventDefault();
        alert("paused");
        },

        //When user returns to the application
    
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
        $("#container").find('input:text').val('');

        // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
        
           
    },

    userDataSave: function(){

        const acceptInput = $("#userInput").val();

        //load current tasks or empty array
        const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

        tasks.push(acceptInput);

        //persist updated task list to local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
        
    },

    //load application

    onDeviceReady: function() {


       pauseListener();
       resumeListener();
       backButtonListener();
       handleUserInput();
       
       checkItem();


    }

};

app.initialize();