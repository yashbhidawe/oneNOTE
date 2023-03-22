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
function render(notesArray ) {

  let listItems = ``;
  for (let i = 0; i < notesArray.length; i++) {
    listItems += `<div class = "outerDiv">
   <div class = "width80">
    <li> 
    ${notesArray[i]} </li> </div> <span class = "flex">  <span class = "delete"> <button class = "button" id = "${i}" onclick="deleteNote(${i})"> Delete </span>  </span>
    </div>
    <hr> 
    `;
  }
  note.innerHTML = listItems;
  
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
function editNote(id){
  
  console.log( `clicked`);

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
