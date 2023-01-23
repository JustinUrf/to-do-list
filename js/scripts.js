// Business Logic for To-Do List 

function toDoList() {
  this.events = {};
  this.currentId = 0;
};

toDoList.prototype.addEvent = function(event){
  event.id = this.assignId();
  this.events[event.id] = event;
};

toDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

toDoList.prototype.deleteEvent = function(id) {
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

