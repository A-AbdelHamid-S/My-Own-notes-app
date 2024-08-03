const notesContainer = document.querySelector('.notes-container')
// console.log("🚀 ~ notesContainer:", notesContainer);
const createButton = document.querySelector('.show-button');
// console.log("🚀 ~ button:", createButton);
let notes = document.querySelectorAll('.input-box');
// console.log("🚀 ~ notes:", notes);




createButton.addEventListener('click',  ()=> {
  let inputBox = document.createElement('p');
  let img = document.createElement('img');
  inputBox.className = 'input-box';
  img.src = 'images/delete.png';
  img.onclick = function(){
    inputBox.remove();
  }
  inputBox.setAttribute('contenteditable', 'true');
  notesContainer.appendChild(inputBox).appendChild(img);

  console.log("🚀 ~ createButton.addEventListener ~ notesContainer:", notesContainer)


});






