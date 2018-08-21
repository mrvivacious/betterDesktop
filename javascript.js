// javascript.js
// This file handles the saving and loading of written data in the textareas
// @author Vivek Bhookya
// TODO::Set up a handy dandy CMD+S (autosave feature :O ???)

init();

// Function init()
// Reloads data from localStorage into the textareas
function init() {
  let hw = localStorage.getItem('hw');
  let notes = localStorage.getItem('notes');

  document.getElementById('hw').value = hw;
  document.getElementById('notes').innerHTML = notes;
}

// Function save()
// Writes written data into localStorage when the save button
//  is clicked
function save() {
  let hw = document.getElementById('hw').value;
  let notes = document.getElementById('notes').value;

  localStorage.setItem('hw', hw);
  localStorage.setItem('notes', notes);
}
