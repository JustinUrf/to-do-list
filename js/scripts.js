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

ToDoList.prototype.findEvent = function(id) {
  if (this.events[id] !== undefined) {
    return this.events[id];
  }
}

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

Event.prototype.fullEventDetails = function () {
  return this.eventDetails;
}

//UI Logic
let toDoList = new ToDoList();

function listToDoList(eventListToDisplay) {
  let eventsDiv = document.querySelector("div#events");
  eventsDiv.innerText = null;
  const ul = document.createElement("ul")
  Object.keys(eventListToDisplay.events).forEach(function(key) {
    const event = eventListToDisplay.findEvent(key);
    const li = document.createElement("li");
    li.append(event.fullEventDetails());
    li.setAttribute("id", event.id);
    ul.append(li);
  });
  eventsDiv.append(ul);
}

function handleFormSubmission() {
  event.preventDefault(); 
  let userEvent = document.getElementById("user-input-id").value;
  newEvent = new Event(userEvent);
  toDoList.addEvent(newEvent);  
  console.log("The button is working")
  listToDoList(toDoList);
}

window.addEventListener("load", function() {
  document.querySelector("form#to-do-list").addEventListener("submit", handleFormSubmission);
})