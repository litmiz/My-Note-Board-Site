//           Note class            //  
class Note {
    constructor(name, date, time) {
        this.name = name;
        this.date = date;
        this.time = time;
    }
}


//         Notes Operations        //
function addNote(name, date, time) {
    const note = new Note(name, date, time);
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));

    addNoteToDom(note);
}

function removeNote(note) {
    notes.splice(notes.indexOf(note), 1);
    localStorage.setItem("notes", JSON.stringify(notes));
}

function addNoteToDom(note) {
    const domNote = document.getElementById('notesArea').insertRow();
    domNote.insertCell().textContent = note.name;
    domNote.insertCell().textContent = note.date;
    domNote.insertCell().textContent = note.time;
    removeButton = domNote.insertCell();
    removeButton.textContent = "x";

    removeButton.addEventListener("click", function(e) {
        removeNote(note);
        domNote.remove();
    });
}


//  Load notes from local storage  //
const notesJson = localStorage.getItem("notes");
if (notesJson === null) {
    notes = [];
} else {
    notes = JSON.parse(notesJson);
}

console.log(notesJson);

notes.forEach(note => {
    addNoteToDom(note);
});