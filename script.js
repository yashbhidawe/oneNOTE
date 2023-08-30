`Use Srict`;
let textBox = document.getElementById(`textBoxId`);
const container = document.getElementById("container");
const notesArray = [];
let note = document.getElementById(`note`);
const taskList = document.querySelector(`.tasks`);
const addBtn = document.getElementById("addBtn");


const notesFromLocalStorage = JSON.parse(localStorage.getItem(`notesArray`));

if (notesFromLocalStorage) {
  render(notesFromLocalStorage);
} 
// script.js
// function render(notesArray) {
//   let listItems = ``;
//   for (let i = 0; i < notesArray.length; i++) {
//     listItems += `
//       <div class="outerDiv">
//         <div class="width80">
//           <li>${notesArray[i]}</li>
//         </div>
//         <div class="flex">
//           <div class="edit">
//             <button class="button" id="${i}" onclick="editNote(${i})">Edit</button>
//           </div>
//           <div class="delete">
//             <button class="button" id="${i}" onclick="deleteNote(${i})">Delete</button>
//           </div>
//         </div>
//       </div>
//       <hr>
//     `;
//   }
//   note.innerHTML = listItems;
// }
// Format depends on user's locale
function render(notesArray) {
  const currentDateTime = new Date();
  const formattedDateTime = currentDateTime.toLocaleString(); 
  let listItems = notesArray.map((note, i) => {
    return `
      <div class="note-item">
        <div class="note-content">
          <span class="note-text">${note}</span>
          <input type="text" class="note-input" value="${note}" style="display: none;">
        </div>
        <div class="note-buttons">
          <button class="button edit-button" onclick="toggleEditMode(${i})">Edit</button>
          <button class="button delete-button" onclick="deleteNote(${i})">Delete</button>
        </div>
      </div>
      <p class="date"> ${formattedDateTime} </p>
      <hr>
    `;
  }).join('');

  note.innerHTML = listItems;
}

function toggleEditMode(i) {
  const noteItem = document.querySelector(`.note-item:nth-child(${i + 1})`);
  const noteText = noteItem.querySelector('.note-text');
  const noteInput = noteItem.querySelector('.note-input');
  const editButton = noteItem.querySelector('.edit-button');

  if (noteText.style.display !== 'none') {
    noteText.style.display = 'none';
    noteInput.style.display = 'block';
    editButton.textContent = 'Save';

    // Focus on the input for easy editing
    noteInput.focus();
  } else {
    noteText.textContent = noteInput.value;
    noteText.style.display = 'inline';
    noteInput.style.display = 'none';
    editButton.textContent = 'Edit';

    // Update the notes array and save to localStorage
    notesArray[i] = noteInput.value;
    localStorageFunction();
  }
}


addBtn.addEventListener("click", function () {
  renderFunction();
  localStorageFunction();
});

textBox.addEventListener(`keypress`, function (event) {
  if (event.key === `Enter`) {
    console.log(`entered`);

    renderFunction();
    localStorageFunction();
  }
});

let renderFunction = function () {
  notesArray.push(textBox.value);
  textBox.value = ``;

  render(notesArray);
};

const localStorageFunction = function () {
  localStorage.setItem(`notesArray`, JSON.stringify(notesArray));
};
function x() {
  localStorage.clear();
}

function deleteNote(notes) {

  notesFromLocalStorage.splice(notes, 1);

  notesArray.splice(notes, 1);
  localStorage.setItem(
    "notesFromLocalStorage",
    JSON.stringify(notesFromLocalStorage)
  );
  localStorage.setItem(
    "notesArray",
    JSON.stringify(notesArray)

  );

  render(notesFromLocalStorage);
  render(notesArray)
 
} 
function editNote(i) {
  toggleEditMode(i);
}




// addBtn.addEventListener(`click`, function ()  {
//   notesArray.push(textBox.value);
// textBox.value = ``;
// for(let i = 0; i < notesArray.length; i++){
//   let div = document.createElement(`div`);
//   div.classList.add(`notes`);
//   div.innerHTML = ``
//   div.textContent += notesArray.pop();
//   taskList.appendChild(div)

// }
// })

// textBox.addEventListener(`keypress`, function(event){
//     if(event.key === `Enter`) {

// notesArray.push(textBox.value);
// textBox.value = ``;
// for(let i = 0; i < notesArray.length; i++){
//   let div = document.createElement(`div`);
//   div.textContent += notesArray.pop();
//   taskList.appendChild(div);
// div.classList.add(`notes`);

//   localStorage.setItem(`notesArray`, JSON.stringify(div.textContent));
//   console.log(div.textContent);
//  div.textContent = localStorage.getItem(JSON.parse(`notesArray`));

// }
// }

// }
// );
