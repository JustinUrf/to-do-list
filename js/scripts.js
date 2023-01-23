// Business Logic for To-Do List 

function ToDoList() {
  this.events = {};
  this.currentId = 0;
};

ToDoList.prototype.addEvent = function(event) {
  event.id = this.assignId();
  this.events[event.id] = event;
};

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

ToDoList.prototype.deleteEvent = function(id) {
  if (this.events[id] === undefined) {
    return false;
  }
  delete this.events[id];
  return true;
};

//Bussiness Logic for creating toDoList Events
function Event(eventDetails){
  this.eventDetails = eventDetails;
};

//UI Logic
function handleFormSubmission() {
  event.preventDefault();
  if (typeof toDoList === 'undefined'){
    let toDoList = new ToDoList();
    console.log("creating new to do list");
    console.log(toDoList);
  }
  let userEvent = document.getElementById("user-input-id").value;
  console.log(userEvent);
  
}

window.addEventListener("load", function() {
  this.document.querySelector("form#to-do-list").addEventListener("submit", handleFormSubmission);
})