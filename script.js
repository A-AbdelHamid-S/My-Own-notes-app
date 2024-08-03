const notesContainer = document.querySelector('.notes-container')
// console.log("🚀 ~ notesContainer:", notesContainer);
const createButton = document.querySelector('.show-button');
// console.log("🚀 ~ button:", createButton);
let notes = document.querySelectorAll('.input-box');
// console.log("🚀 ~ notes:", notes);

localStorage.setItem('input-box', notes);
function displayNotes(){
  const savedNotes = localStorage.getItem(JSON.stringify('inputBox'));
  console.log("🚀 ~ displayNotes ~ savedNotes:", savedNotes)
  if(savedNotes){
    notesContainer.textContent = JSON.parse(savedNotes);
  }
  else{
    notesContainer.textContent = 'No Notes'
  }
}
displayNotes()

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






