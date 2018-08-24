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

  let v_241 = localStorage.getItem('d_241');
  let v_200 = localStorage.getItem('d_200');
  let v_330 = localStorage.getItem('d_330');
  let v_350 = localStorage.getItem('d_350');
  let v_402 = localStorage.getItem('d_402');
  let v_201 = localStorage.getItem('d_201');
  let v_extrac = localStorage.getItem('d_extrac');
  let v_other = localStorage.getItem('d_other');

  // document.getElementById('hw').value = hw;
  // document.getElementById('notes').innerHTML = notes;

  document.getElementById('241').value = v_241;
  document.getElementById('200').value = v_200;
  document.getElementById('330').value = v_330;
  document.getElementById('350').value = v_350;
  document.getElementById('402').value = v_402;
  document.getElementById('201').value = v_201;
  document.getElementById('extrac').value = v_extrac;
  document.getElementById('other').value = v_other;
}

// Function save()
// Writes written data into localStorage when the save button
//  is clicked
function save() {
  // d_ = data
  let d_241 = document.getElementById('241').value;
  let d_200 = document.getElementById('200').value;
  let d_330 = document.getElementById('330').value;
  let d_350 = document.getElementById('350').value;
  let d_402 = document.getElementById('402').value;
  let d_201 = document.getElementById('201').value;
  let d_extrac = document.getElementById('extrac').value;
  let d_other = document.getElementById('other').value;

  localStorage.setItem('d_241', d_241);
  localStorage.setItem('d_200', d_200);
  localStorage.setItem('d_330', d_330);
  localStorage.setItem('d_350', d_350);
  localStorage.setItem('d_402', d_402);
  localStorage.setItem('d_201', d_201);
  localStorage.setItem('d_extrac', d_extrac);
  localStorage.setItem('d_other', d_other);
}
