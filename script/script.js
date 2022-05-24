let titels = [];
let notes = [];

function init() {
    load();
    render();
}


function render() {
    let content = document.getElementById('content');

    content.innerHTML = '';
    content.innerHTML += /*html*/ ``;


    for (let i = 0; i < titels.length; i++) {
        const titel = titels[i];
        const note = notes[i];

        content.innerHTML += /*html*/ `

        <div class="card">
            <b>Titel: </b> ${titel} <br>
            <b>Notiz: </b> ${note} <br>
            <button onclick="deleteNote(${i})" class="btn"><img src="img/delete.png"></button>
        </div>
        `;
    }

    refresh();

}

function refresh() {
    document.getElementById('titel').value = '';
    document.getElementById('note').value = '';
}

function addNote() {
    if (inputsAreEmpty()) {
        alert("Nachricht und Titel eingeben!")
    } else {
        pushNewNote();
        render();
        save();
    }
}

function pushNewNote() {
    let titel = document.getElementById('titel');
    let note = document.getElementById('note');

    titels.push(titel.value);
    notes.push(note.value);
}

function inputsAreEmpty() {
    let titel = document.getElementById('titel');
    let note = document.getElementById('note');

    return titel.value.length == 0 || note.value.length == 0;
}

function deleteNote(i) {
    titels.splice(i, 1);
    notes.splice(i, 1);

    render();
    save();
}

function save() {
    let titelAsText = JSON.stringify(titels);
    let noteAsText = JSON.stringify(notes);


    localStorage.setItem('titels', titelAsText);
    localStorage.setItem('notes', noteAsText);
}

function load() {
    let titelAsText = localStorage.getItem('titels');
    let noteAsText = localStorage.getItem('notes');

    if (titelAsText && noteAsText) {
        titels = JSON.parse(titelAsText);
        notes = JSON.parse(noteAsText);
    }
}